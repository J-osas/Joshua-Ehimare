import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from "@google/genai";
import { motion, AnimatePresence } from 'motion/react';
import { Mic, MicOff, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

export function GeminiLive() {
  const [isActive, setIsActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [status, setStatus] = useState('Ready to talk');
  const [transcript, setTranscript] = useState('');
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const sessionRef = useRef<any>(null);
  const audioQueue = useRef<Int16Array[]>([]);
  const isPlaying = useRef(false);

  const startSession = async () => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      audioContextRef.current = new AudioContext({ sampleRate: 16000 });
      streamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const sessionPromise = ai.live.connect({
        model: "gemini-2.5-flash-native-audio-preview-09-2025",
        callbacks: {
          onopen: () => {
            setStatus('Listening...');
            setIsActive(true);
            sessionPromise.then(session => {
              sessionRef.current = session;
              startStreaming();
            });
          },
          onmessage: async (message: LiveServerMessage) => {
            if (message.serverContent?.modelTurn?.parts[0]?.inlineData?.data) {
              const base64Audio = message.serverContent.modelTurn.parts[0].inlineData.data;
              const audioData = Int16Array.from(atob(base64Audio), c => c.charCodeAt(0));
              audioQueue.current.push(audioData);
              if (!isPlaying.current) playNextInQueue();
            }
            
            if (message.serverContent?.modelTurn?.parts[0]?.text) {
              setTranscript(prev => prev + ' ' + message.serverContent?.modelTurn?.parts[0]?.text);
            }
          },
          onclose: () => {
            stopSession();
          },
          onerror: (err) => {
            console.error('Gemini Live Error:', err);
            setStatus('Error occurred');
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } },
          },
          systemInstruction: "You are Joshua Ehimare's AI assistant. You help visitors understand Joshua's design philosophy and expertise. Be bold, creative, and professional.",
        },
      });
      
      const session = await sessionPromise;
      sessionRef.current = session;
    } catch (err) {
      console.error('Failed to start session:', err);
      setStatus('Failed to connect');
    }
  };

  const startStreaming = () => {
    if (!sessionRef.current || !audioContextRef.current || !streamRef.current) return;
    
    const source = audioContextRef.current.createMediaStreamSource(streamRef.current);
    const processor = audioContextRef.current.createScriptProcessor(4096, 1, 1);
    
    source.connect(processor);
    processor.connect(audioContextRef.current.destination);
    
    processor.onaudioprocess = (e) => {
      if (!isActive || isMuted || !sessionRef.current) return;
      const inputData = e.inputBuffer.getChannelData(0);
      const pcmData = new Int16Array(inputData.length);
      for (let i = 0; i < inputData.length; i++) {
        pcmData[i] = Math.max(-1, Math.min(1, inputData[i])) * 0x7FFF;
      }
      
      const base64Data = btoa(String.fromCharCode(...new Uint8Array(pcmData.buffer)));
      sessionRef.current.sendRealtimeInput({
        media: { data: base64Data, mimeType: 'audio/pcm;rate=16000' }
      });
    };
  };

  const playNextInQueue = async () => {
    if (audioQueue.current.length === 0) {
      isPlaying.current = false;
      return;
    }
    
    isPlaying.current = true;
    const audioData = audioQueue.current.shift()!;
    const buffer = audioContextRef.current!.createBuffer(1, audioData.length, 16000);
    const channelData = buffer.getChannelData(0);
    for (let i = 0; i < audioData.length; i++) {
      channelData[i] = audioData[i] / 0x7FFF;
    }
    
    const source = audioContextRef.current!.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContextRef.current!.destination);
    source.onended = playNextInQueue;
    source.start();
  };

  const stopSession = () => {
    setIsActive(false);
    setStatus('Ready to talk');
    streamRef.current?.getTracks().forEach(track => track.stop());
    audioContextRef.current?.close();
    sessionRef.current?.close();
  };

  return (
    <div className="p-12 bg-surface border border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4">
        <Sparkles className="text-accent animate-pulse" />
      </div>
      
      <h3 className="text-2xl font-display font-bold mb-6 uppercase tracking-widest">
        Talk to <span className="text-accent">Joshua AI</span>
      </h3>
      
      <div className="flex items-center gap-6 mb-8">
        <button
          onClick={isActive ? stopSession : startSession}
          className={cn(
            "w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500",
            isActive ? "bg-accent text-background scale-110 shadow-[0_0_30px_rgba(255,77,0,0.4)]" : "bg-border text-foreground hover:bg-accent hover:text-background"
          )}
        >
          {isActive ? <Mic size={32} /> : <MicOff size={32} />}
        </button>
        
        <div>
          <p className="font-mono text-sm uppercase tracking-widest text-accent mb-1">{status}</p>
          <p className="text-secondary-text text-xs uppercase tracking-widest">Powered by Gemini 2.5 Live</p>
        </div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border pt-6"
          >
            <p className="text-sm text-secondary-text italic font-mono">
              {transcript || "Speak now to interact with the AI..."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

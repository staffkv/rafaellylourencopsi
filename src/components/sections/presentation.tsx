"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "../ui/icon";
import { SectionHeading } from "../ui/section-heading";

export function Presentation() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="section presentation">
      <div className="container presentation-grid">
        <div className="video-frame">
          {playing ? (
            // biome-ignore lint/a11y/useMediaCaption: O vídeo fornecido não inclui transcrição; não criar legendas fictícias.
            <video
              controls
              autoPlay
              playsInline
              preload="metadata"
              aria-label="Vídeo de apresentação de Rafaelly Lourenço"
            >
              <source src="/videos/apresentacao-web.mp4" type="video/mp4" />
              <p>
                Seu navegador não suporta vídeo.{" "}
                <a href="/videos/apresentacao-web.mp4">
                  Abrir vídeo de apresentação
                </a>
                .
              </p>
            </video>
          ) : (
            <button
              type="button"
              className="video-poster"
              onClick={() => setPlaying(true)}
              aria-label="Reproduzir apresentação de Rafaelly Lourenço"
            >
              <Image
                src="/images/optimized/video-poster.webp"
                alt=""
                fill
                sizes="(max-width: 760px) 90vw, 40vw"
              />
              <span className="play-button">
                <Icon name="play" />
              </span>
              <span className="video-label">
                Um pouco sobre mim <span>ASSISTA À APRESENTAÇÃO</span>
              </span>
            </button>
          )}
        </div>
        <div className="presentation-copy">
          <SectionHeading eyebrow="VAMOS NOS CONHECER?">
            Por trás da escuta,
            <br />
            <em>uma pessoa.</em>
          </SectionHeading>
          <p>
            Escolher com quem compartilhar sua história é um passo importante.
            Neste vídeo, você pode conhecer um pouco mais sobre mim e o meu
            trabalho.
          </p>
          <a href="#sobre" className="text-link">
            Conhecer minha formação <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

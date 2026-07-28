// JS/qmove.popup.js
import { Z } from "./z.js";
import { ORBIT } from "./orbit.js";
import { CORE } from "./core.js";

export function QMOVE_POPUP() {
    const w = window.open("", "Q-Move", "width=600,height=700");

    w.document.write(`
        <style>
            body { background:#000; color:#eee; font-family:Consolas; padding:20px; }
            h1 { color:#6cf; }
            #area {
                position:relative;
                width:500px;
                height:500px;
                border:1px solid #333;
                margin-top:20px;
                perspective:800px;
            }
            .dot {
                width:20px; height:20px; border-radius:50%;
                position:absolute;
                transition:all 0.8s ease;
                box-shadow:0 0 10px #fff;
            }
            .trail {
                width:8px; height:8px; border-radius:50%;
                position:absolute;
                opacity:0.4;
            }
        </style>

        <h1>Q‑Move · W → S → M → 81 → Q → W</h1>
        <audio id="snd" src="https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg"></audio>
        <div id="area"></div>
    `);

    const area = w.document.getElementById("area");
    const snd = w.document.getElementById("snd");

    const move = [
        { name: "W",  x: -1,  y: 0,   z: Z(0),  color: "#6cf" },
        { name: "S",  x: 0,   y: -1,  z: Z(1),  color: "#c66" },
        { name: "M",  x: 0,   y: 0,   z: Z(2),  color: "#ccc" },
        { name: "81", x: -0.5,y: 0.5, z: Z(3),  color: "#fc6" },
        { name: "Q",  x: 1,   y: 0,   z: Z(4),  color: "#6f6" },
        { name: "W",  x: -1,  y: 0,   z: Z(0),  color: "#6cf" }
    ];

    const dot = w.document.createElement("div");
    dot.className = "dot";
    dot.style.left = "250px";
    dot.style.top  = "250px";
    dot.style.background = "#fff";
    area.appendChild(dot);

    move.forEach((p, i) => {
        setTimeout(() => {

            // 3D Rotation (Z‑Achse)
            area.style.transform = `rotateY(${p.z * 25}deg) rotateX(${p.z * 10}deg)`;

            // Sound
            snd.currentTime = 0;
            snd.play();

            // Trail
            const trail = w.document.createElement("div");
            trail.className = "trail";
            trail.style.background = p.color;
            trail.style.left = (250 + p.x * 120) + "px";
            trail.style.top  = (250 + p.y * 120) + "px";
            area.appendChild(trail);

            // Move dot
            dot.style.background = p.color;
            dot.style.left = (250 + p.x * 120) + "px";
            dot.style.top  = (250 + p.y * 120) + "px";

        }, i * 700);
    });
}

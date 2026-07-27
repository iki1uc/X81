export function AtomRings4D() {
    const style = `
        <style>
            .ring4d {
                width: 180px;
                height: 180px;
                border-radius: 50%;
                border: 6px solid;
                margin: 20px;
                display: inline-block;
                animation: spin4d 4s linear infinite;
                transform-style: preserve-3d;
            }

            .elektron { border-color: yellow; animation-duration: 2s; }
            .proton   { border-color: red;    animation-duration: 3s; }
            .neutron  { border-color: green;  animation-duration: 4s; }
            .vector   { border-color: cyan;   animation-duration: 5s; }

            @keyframes spin4d {
                0%   { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
                50%  { transform: rotateX(180deg) rotateY(90deg) rotateZ(45deg); }
                100% { transform: rotateX(360deg) rotateY(180deg) rotateZ(90deg); }
            }
        </style>
    `;

    return `
        ${style}
        <div class="ring4d elektron"></div>
        <div class="ring4d proton"></div>
        <div class="ring4d neutron"></div>
        <div class="ring4d vector"></div>
    `;
}

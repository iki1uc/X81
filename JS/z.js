export function Z_Axis(atom) {
    return {
        From: "PI",
        To: "Z",
        Bridge: "Cross‑Vector",
        Charge: atom.Proton,
        Flow: atom.Elektron + " → Z",
        Neutron: atom.Neutron,
        State: "Aktiv",
        Geo: "Z‑Vector",
        Level: "∞3"
    };
}

{
  pkgs ? <nixpkgs> { },
}:
pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_22
    pnpm_9
  ];
}

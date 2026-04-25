{
  pkgs ? <nixpkgs> { },
}:
pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_24
    pnpm_10
  ];
}

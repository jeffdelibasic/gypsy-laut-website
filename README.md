# Gypsy Laut website export

This is a copy of the locally identified static preview source, not a verified export of the current hosted version. It has not been changed to implement the new stationary accommodation concept. The copied source contains historical charter and expedition offers which need a decision before reuse. No website was deployed or changed by this handover.

Folder layout:
- `site/`: complete static preview, with `index.html`, six experience pages and the original `gypsy-laut/assets/` paths. Homepage CSS is embedded in HTML; experience pages have their own CSS; scripts are in `site/gypsy-laut/assets/js/`.
- `assets/`: pointer to the working assets inside `site/`, kept there to preserve existing relative paths.
- `docs/`: Claude handover and the flyer found in the original source.
- `access-map.md`: known locations and unverified access details.

Run a local HTTP server with `site/` as its document root and visit its root URL. Directory links may not work correctly by double-clicking `index.html` with a file:// URL. The source includes video and other large files. Some media has unverified rights or approval; do not assume every included asset is cleared for public use.

The older README in the original project refers to an earlier state and wrongly says the experience pages are not yet built; do not use it as a current inventory. Review `docs/HANDOVER.md` and `access-map.md` before work.

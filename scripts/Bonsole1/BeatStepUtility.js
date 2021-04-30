function sleep (milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function isValidMod(cc){
    return Array.from(Object.values(MODS), (x) => x.cc).includes(cc);
};

function isValidPad(cc){
    return Array.from(Object.values(PADS), (x) => x.cc).includes(cc);
};

function isValidEncoder(cc){
    return Array.from(Object.values(ENCODERS), (x) => x.cc).includes(cc);
};

function isValidCC(cc){
    return isValidPad(cc) || isValidEncoder(cc) || isValidMod(cc);
};

function isMod(cc, mod){
    return isValidMod(cc) && MODS[mod].cc == cc;
};

function isPad(cc, pad){
    return isValiPad(cc) && PADS[pad].cc == cc;
};

function isEncoder(cc, encoder){
    return isValidEncoder(cc) && ENCODERS[encoder].cc == cc;
};
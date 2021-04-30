// Definitions

const MOD_START     = 0X58;
const MOD_STOP      = 0X59;
const MOD_RECALL    = 0X5C;
const MOD_STORE     = 0X5D;
const MOD_SHIFT     = 0X5E;
const MOD_CHAN      = 0X5F;

const PAD_1         = 0x70;
const PAD_2         = 0x71;
const PAD_3         = 0x72;
const PAD_4         = 0x73;
const PAD_5         = 0x74;
const PAD_6         = 0x75;
const PAD_7         = 0x76;
const PAD_8         = 0x77;
const PAD_9         = 0x78;
const PAD_10        = 0x79;
const PAD_11        = 0x7A;
const PAD_12        = 0x7B;
const PAD_13        = 0x7C;
const PAD_14        = 0x7D;
const PAD_15        = 0x7E;
const PAD_16        = 0x7F;

const ENCODER_1        = 0x20;
const ENCODER_2        = 0x21;
const ENCODER_3        = 0x22;
const ENCODER_4        = 0x23;
const ENCODER_5        = 0x24;
const ENCODER_6        = 0x25;
const ENCODER_7        = 0x26;
const ENCODER_8        = 0x27;
const ENCODER_9        = 0x28;
const ENCODER_10       = 0x29;
const ENCODER_11       = 0x2A;
const ENCODER_12       = 0x2B;
const ENCODER_13       = 0x2C;
const ENCODER_14       = 0x2D;
const ENCODER_15       = 0x2E;
const ENCODER_16       = 0x2F;

const ENCODER_BIG      = 0x30;

const MODS = {
    MOD_START     : { id: 0X58, cc: 0x15},
    MOD_STOP      : { id: 0X59, cc: 0x16},
    MOD_CNTRL_SEQ : { id: 0X5A, cc: 0x17},
    MOD_EXTSYNC   : { id: 0X5B, cc: 0x18},
    MOD_RECALL    : { id: 0X5C, cc: 0x19},
    MOD_STORE     : { id: 0X5D, cc: 0x1A},
    MOD_SHIFT     : { id: 0X5E, cc: 0x1B},
    MOD_CHAN      : { id: 0X5F, cc: 0x1C}
}

const PADS = {
    PAD_1    : { id: 0x70, cc: 0x67 },
    PAD_2    : { id: 0x71, cc: 0x68 },
    PAD_3    : { id: 0x72, cc: 0x69 },
    PAD_4    : { id: 0x73, cc: 0x6A },
    PAD_5    : { id: 0x74, cc: 0x6B },
    PAD_6    : { id: 0x75, cc: 0x6C },
    PAD_7    : { id: 0x76, cc: 0x6D },
    PAD_8    : { id: 0x77, cc: 0x6E },
    PAD_9    : { id: 0x78, cc: 0x6F },
    PAD_10   : { id: 0x79, cc: 0x70 },
    PAD_11   : { id: 0x7A, cc: 0x71 },
    PAD_12   : { id: 0x7B, cc: 0x72 },
    PAD_13   : { id: 0x7C, cc: 0x73 },
    PAD_14   : { id: 0x7D, cc: 0x74 },
    PAD_15   : { id: 0x7E, cc: 0x75 },
    PAD_16   : { id: 0x7F, cc: 0x76 }
}

const ENCODERS = {
    ENCODER_1   : { id: 0x20, cc: 0x17 },
    ENCODER_2   : { id: 0x21, cc: 0x18 },
    ENCODER_3   : { id: 0x22, cc: 0X19 },
    ENCODER_4   : { id: 0x23, cc: 0X1A },
    ENCODER_5   : { id: 0x24, cc: 0X1B },
    ENCODER_6   : { id: 0x25, cc: 0X1C },
    ENCODER_7   : { id: 0x26, cc: 0X1D },
    ENCODER_8   : { id: 0x27, cc: 0X1E },
    ENCODER_9   : { id: 0x28, cc: 0x35 },
    ENCODER_10  : { id: 0x29, cc: 0x36 },
    ENCODER_11  : { id: 0x2A, cc: 0x37 },
    ENCODER_12  : { id: 0x2B, cc: 0x38 },
    ENCODER_13  : { id: 0x2C, cc: 0x39 },
    ENCODER_14  : { id: 0x2D, cc: 0x3A },
    ENCODER_15  : { id: 0x2E, cc: 0x3B },
    ENCODER_16  : { id: 0x2F, cc: 0x3C },
    ENCODER_BIG : { id: 0x30, cc: 0x14 },
}

const LED_COLOR = {
    black     : 0x00,
    red       : 0x01,
    blue      : 0x10,
    magenta   : 0x11
}
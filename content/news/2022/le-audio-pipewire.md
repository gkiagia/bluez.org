---
title: "LE Audio support in PipeWire"
date: 2022-11-14
summary: "Since version 0.3.59, PipeWire supports LE Audio's Basic Audio Profile (BAP) for Connected Isochronous Streams (CIS) with the Low Complexity Communication Codec (LC3), see ..."
---


Since version 0.3.59, PipeWire supports LE Audio’s Basic Audio Profile (BAP) for Connected
Isochronous Streams (CIS) with the Low Complexity Communication Codec (LC3), see
[https://www.linkedin.com/posts/collabora_add-bluetooth-le-audio-support-1360-activity-6978014601649037312-7W6d/](https://www.linkedin.com/posts/collabora_add-bluetooth-le-audio-support-1360-activity-6978014601649037312-7W6d/).

Thanks to the modular architecture of PipeWire, it is ready for future codecs. It supports
bi-directional audio and can act as a Central or Peripheral device. In the former case, it allows the
end-user to select a new audio profile, while in the latter, it automatically connects Bluetooth audio
streams to the local audio input and output. This paves the way for Auracast support in BlueZ and
PipeWire.

If you are interested in trying this, the LC3 codec from
[https://github.com/google/liblc3.git](https://github.com/google/liblc3.git) must be installed. The
PipeWire meson build must be configured with the option `-Dbluez5-codec-lc3=enabled`.

---
title: "LE Audio Support"
date: 2022-11-14
summary: "From release 5.66, the initial support for BAP (Basic Audio Profile) which is an essential part of LE Audio responsible for stream control is added."
---


From release 5.66, the initial support for BAP (Basic Audio Profile), which is an essential part
of LE Audio responsible for stream control, is added.

The plugin is considered experimental and depends on ISO socket in order to work, so the following
setting needs to be changed in order to enable it:

```ini
# Enables D-Bus experimental interfaces
# Possible values: true or false
Experimental = true
```

```ini
# Enables kernel experimental features, alternatively a list of UUIDs
# can be given.
# a6695ace-ee7f-4fb9-881a-5fac66c629af (BlueZ Experimental Offload Codecs)
# 6fbaf188-05e0-496a-9885-d6ddfdb4e03e (BlueZ Experimental ISO socket)
# Defaults to false.
KernelExperimental = 6fbaf188-05e0-496a-9885-d6ddfdb4e03e
```

While proper support to the likes of PulseAudio and Pipewire are still in progress, it is possible
to test using bluetoothctl with the following commands:

#### Server/Peripheral

```shell
[bluetooth]# power on
[bluetooth]# advertise on
[bluetooth]# endpoint.register 00002bc9-0000-1000-8000-00805f9b34fb 0x06
[/local/endpoint/ep0] Auto Accept (yes/no): y
[/local/endpoint/ep0] CIG (auto/value): a
[/local/endpoint/ep0] CIS (auto/value): a
Capabilities:
  03 01 ff 00 02 02 03 02 03 03 05 04 1e 00 f0 00  ................
Endpoint /local/endpoint/ep0 registered
[bluetooth]# endpoint.register 00002bcb-0000-1000-8000-00805f9b34fb 0x06
[/local/endpoint/ep1] Auto Accept (yes/no): y
[/local/endpoint/ep1] CIG (auto/value): a
[/local/endpoint/ep1] CIS (auto/value): a
Capabilities:
  03 01 ff 00 02 02 03 02 03 03 05 04 1e 00 f0 00  ................
Endpoint /local/endpoint/ep1 registered
```

#### Client/Central

```shell
[bluetooth]# power on
[bluetooth]# endpoint.register 00002bc9-0000-1000-8000-00805f9b34fb 0x06
[/local/endpoint/ep0] Auto Accept (yes/no): y
[/local/endpoint/ep0] CIG (auto/value): a
[/local/endpoint/ep0] CIS (auto/value): a
Capabilities:
  03 01 ff 00 02 02 03 02 03 03 05 04 1e 00 f0 00  ................
Endpoint /local/endpoint/ep0 registered
[bluetooth]# endpoint.register 00002bcb-0000-1000-8000-00805f9b34fb 0x06
[/local/endpoint/ep1] Auto Accept (yes/no): y
[/local/endpoint/ep1] CIG (auto/value): a
[/local/endpoint/ep1] CIS (auto/value): a
Capabilities:
  03 01 ff 00 02 02 03 02 03 03 05 04 1e 00 f0 00  ................
Endpoint /local/endpoint/ep1 registered
[bluetooth]# scan on
[bluetooth]# scan off
[bluetooth]# connect
[NEW] Transport /org/bluez/hci0/dev_00_AA_01_01_00_02/pac_source0/fd0
Endpoint: SetConfiguration
        Transport /org/bluez/hci0/dev_00_AA_01_01_00_02/pac_source0/fd0
        Device: /org/bluez/hci0/dev_00_AA_01_01_00_02
Auto Accepting...
[NEW] Transport /org/bluez/hci0/dev_00_AA_01_01_00_02/pac_sink0/fd1
Endpoint: SetConfiguration
        Transport /org/bluez/hci0/dev_00_AA_01_01_00_02/pac_sink0/fd1
        Device: /org/bluez/hci0/dev_00_AA_01_01_00_02
Auto Accepting...
[bluetooth]# transport.acquire /org/bluez/hci0/dev_00_AA_01_01_00_02/pac_sink0/fd1
```

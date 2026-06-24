# 天空戦国 (Tenkū Sengoku)

A **Create**-centric, Sengoku-Japan–themed Minecraft modpack, distributed with [Packwiz](https://packwiz.infra.link/).

| | |
|---|---|
| **Minecraft** | 1.21.1 |
| **Loader** | NeoForge 21.1.234 |
| **Mods** | 100 |

This repository hosts **only the packwiz distribution files** (`pack.toml`, `index.toml`, and the per-mod metadata under `mods/`, `resourcepacks/`, `shaderpacks/`). No mod jars are stored here — packwiz downloads each file from its original source (Modrinth/CurseForge) at install time.

## Install

1. Download **`packwiz-installer-bootstrap.jar`** from the [packwiz-installer releases](https://github.com/packwiz/packwiz-installer/releases).
2. Place it in your instance's `.minecraft` (or `minecraft`) folder.
3. Run:

   ```
   java -jar packwiz-installer-bootstrap.jar https://raw.githubusercontent.com/west3436/tenku-sengoku/main/pack.toml
   ```

This fetches every mod, resource pack, and shader pack defined in the pack.

### Prism Launcher / MultiMC

Use **Add Instance → Import from packwiz** (or the packwiz auto-update component) and point it at the same URL:

```
https://raw.githubusercontent.com/west3436/tenku-sengoku/main/pack.toml
```

## Renderer note (Voxy)

The pack is tuned for extended render distance with **Voxy**, which is *All-Rights-Reserved and cannot be redistributed*. It is **not** included here. To use it, build it from source (or obtain it from the official channel) and drop the jar into your instance's `mods/` folder yourself. The pack runs fine without it.

## License

Pack configuration (this repository) © west3436. Each referenced mod, resource pack, and shader pack remains under its own author's license — see the original source linked in each `.pw.toml`.

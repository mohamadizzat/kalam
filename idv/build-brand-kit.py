#!/usr/bin/env python3
"""
KALAM Brand Kit Generator v2
Focus: QUALITY over quantity. Every file must be usable by AI for content generation.
"""

import os
import json
import shutil
import math
import random
from PIL import Image, ImageDraw, ImageFilter, ImageFont
from pathlib import Path

BASE = Path("/Users/mohamadizzat/Desktop/kalam/idv")
OUT = BASE / "brand-kit"

# ── Brand Constants ──
BRAND = {
    "name": "KALAM",
    "tagline": "A Palavra",
    "meaning": "كلام — The Word of God",
    "website": "kalambrasil.com",
}

COLORS = {
    "midnight": "#0A0A0A",
    "sacred-gold": "#C9A84C",
    "ivory": "#F5F5F0",
    "deep-navy": "#1A1A2E",
    "bronze": "#8B7355",
    "surface": "#161220",
    "elevated": "#1C1828",
    "gold-soft": "#D4AF37",
    "gold-muted": "#B8960C",
    "app-bg": "#0D0B12",
}

# ── Source logos with metadata ──
SOURCES = {
    "primary-dark": {
        "path": BASE / "logos" / "primary-dark.png",
        "bg": "dark",     # Has dark bg baked in
        "shape": "square",
        "desc": "KALAM + كلام wordmark on dark",
    },
    "icon-mark": {
        "path": BASE / "logos" / "icon-mark.png",
        "bg": "transparent",  # Already has alpha
        "shape": "square",
        "desc": "K letterform geometric outline",
    },
    "vertical-lockup": {
        "path": BASE / "logos" / "vertical-lockup.png",
        "bg": "dark",
        "shape": "portrait",
        "desc": "كلام + KALAM + A PALAVRA stacked",
    },
    "horizontal-dark": {
        "path": BASE / "logos" / "horizontal-dark.png",
        "bg": "transparent",
        "shape": "landscape",
        "desc": "كلام calligraphy | KALAM horizontal",
    },
    "social-avatar": {
        "path": BASE / "logo-social-avatar.png",
        "bg": "dark",
        "shape": "square",
        "desc": "KS monogram in dark circle",
    },
    "monogram": {
        "path": BASE / "logo-monogram.png",
        "bg": "transparent",
        "shape": "square",
        "desc": "Serif K letter with flourish",
    },
    "arabic-only": {
        "path": BASE / "logo-arabic-only.png",
        "bg": "dark",
        "shape": "square",
        "desc": "كلام arabic calligraphy only",
    },
    "full-lockup": {
        "path": BASE / "logo-full-lockup.png",
        "bg": "dark",
        "shape": "portrait",
        "desc": "Full brand lockup vertical",
    },
    "horizontal-light": {
        "path": BASE / "logo-horizontal.png",
        "bg": "dark",
        "shape": "landscape",
        "desc": "Horizontal lockup dark bg",
    },
    "light-bg": {
        "path": BASE / "logo-light-bg.png",
        "bg": "light",
        "shape": "landscape",
        "desc": "Horizontal lockup light background",
    },
    "watermark": {
        "path": BASE / "logo-watermark.png",
        "bg": "transparent",
        "shape": "landscape",
        "desc": "Watermark version",
    },
    "main": {
        "path": BASE / "logo-main.png",
        "bg": "transparent",
        "shape": "square",
        "desc": "Main logo mark",
    },
}

# Only useful sizes (no micro-sizes)
SIZES = [4096, 2048, 1024, 512]

# Social media specs
SOCIAL = {
    "instagram-post": (1080, 1080),
    "instagram-story": (1080, 1920),
    "instagram-profile": (800, 800),  # Upscaled for quality
    "youtube-banner": (2560, 1440),
    "youtube-thumbnail": (1280, 720),
    "youtube-profile": (800, 800),
    "twitter-header": (1500, 500),
    "twitter-profile": (800, 800),
    "linkedin-banner": (1584, 396),
    "linkedin-profile": (800, 800),
    "facebook-cover": (1640, 924),
    "og-image": (1200, 630),
    "favicon-512": (512, 512),
    "favicon-192": (192, 192),
}


def hex_to_rgb(h):
    h = h.lstrip("#")
    return (int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16))


def setup_dirs():
    dirs = [
        "originals",
        "png/transparent", "png/on-dark", "png/on-light",
        "webp/on-dark", "webp/on-light",
        "jpg/on-dark", "jpg/on-light",
        "social/instagram", "social/youtube", "social/twitter",
        "social/linkedin", "social/facebook", "social/og",
        "social/favicon",
        "color-swatches",
    ]
    if OUT.exists():
        shutil.rmtree(OUT)
    for d in dirs:
        (OUT / d).mkdir(parents=True, exist_ok=True)
    print(f"[OK] Created {len(dirs)} directories")


def create_gradient_bg(width, height, style="dark"):
    """Create rich gradient backgrounds instead of flat colors."""
    img = Image.new("RGB", (width, height))
    draw = ImageDraw.Draw(img)

    if style == "dark":
        # Subtle radial-ish gradient: center slightly lighter
        c1 = (13, 11, 18)   # app-bg #0D0B12
        c2 = (10, 10, 10)   # midnight edges
        c3 = (22, 18, 30)   # elevated center hint
    elif style == "navy":
        c1 = (26, 26, 46)   # deep-navy
        c2 = (13, 11, 18)   # app-bg edges
        c3 = (28, 24, 40)   # center
    else:  # light
        c1 = (245, 245, 240)  # ivory
        c2 = (235, 232, 225)  # slightly darker edges
        c3 = (248, 248, 245)  # brighter center

    # Vertical gradient with center highlight
    for y in range(height):
        # Progress: 0 at top, 1 at bottom
        t = y / max(height - 1, 1)
        # Create a bell curve for center brightening
        center_factor = math.exp(-((t - 0.45) ** 2) / 0.08) * 0.3

        r = int(c1[0] * (1 - t) + c2[0] * t + (c3[0] - c1[0]) * center_factor)
        g = int(c1[1] * (1 - t) + c2[1] * t + (c3[1] - c1[1]) * center_factor)
        b = int(c1[2] * (1 - t) + c2[2] * t + (c3[2] - c1[2]) * center_factor)

        r = max(0, min(255, r))
        g = max(0, min(255, g))
        b = max(0, min(255, b))

        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # Add subtle noise for texture
    import random as rng
    rng.seed(42)  # Deterministic
    pixels = img.load()
    for y in range(0, height, 2):
        for x in range(0, width, 2):
            r, g, b = pixels[x, y]
            noise = rng.randint(-3, 3)
            pixels[x, y] = (
                max(0, min(255, r + noise)),
                max(0, min(255, g + noise)),
                max(0, min(255, b + noise)),
            )

    return img


def add_gold_vignette(img, intensity=0.15):
    """Add subtle gold light vignette to dark backgrounds."""
    w, h = img.size
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Gold glow from center
    gold = hex_to_rgb("#C9A84C")
    cx, cy = w // 2, int(h * 0.45)
    max_r = max(w, h) * 0.6

    for r_step in range(int(max_r), 0, -4):
        t = r_step / max_r
        alpha = int((1 - t) * intensity * 255 * (1 - t))
        alpha = max(0, min(255, alpha))
        if alpha > 0:
            draw.ellipse(
                [cx - r_step, cy - r_step, cx + r_step, cy + r_step],
                fill=(gold[0], gold[1], gold[2], alpha)
            )

    img_rgba = img.convert("RGBA")
    result = Image.alpha_composite(img_rgba, overlay)
    return result.convert("RGB")


def resize_keep_aspect(img, target_size):
    w, h = img.size
    ratio = min(target_size / w, target_size / h)
    new_w = max(1, int(w * ratio))
    new_h = max(1, int(h * ratio))
    return img.resize((new_w, new_h), Image.LANCZOS)


def place_logo_on_canvas(logo_img, canvas_w, canvas_h, bg_style="dark", logo_scale=0.55, add_vignette=True):
    """Place logo on a premium gradient canvas."""
    # Create gradient background
    bg = create_gradient_bg(canvas_w, canvas_h, bg_style)

    if add_vignette and bg_style == "dark":
        bg = add_gold_vignette(bg, intensity=0.08)

    bg_rgba = bg.convert("RGBA")

    # Scale logo to fit
    logo = logo_img.convert("RGBA")
    target = int(min(canvas_w, canvas_h) * logo_scale)
    logo_resized = resize_keep_aspect(logo, target)

    # Center
    ox = (canvas_w - logo_resized.width) // 2
    oy = (canvas_h - logo_resized.height) // 2

    bg_rgba.paste(logo_resized, (ox, oy), logo_resized)
    return bg_rgba


def smart_make_transparent(img, bg_type):
    """Make transparent based on known background type."""
    img = img.convert("RGBA")
    if bg_type == "transparent":
        return img  # Already transparent

    data = list(img.getdata())
    new_data = []

    if bg_type == "dark":
        for r, g, b, a in data:
            # Adaptive threshold: very dark pixels become transparent
            brightness = (r + g + b) / 3
            if brightness < 30:
                new_data.append((r, g, b, 0))
            elif brightness < 50:
                # Soft edge - partial transparency
                edge_alpha = int((brightness - 30) / 20 * 255)
                new_data.append((r, g, b, min(a, edge_alpha)))
            else:
                new_data.append((r, g, b, a))
    elif bg_type == "light":
        for r, g, b, a in data:
            brightness = (r + g + b) / 3
            if brightness > 240:
                new_data.append((r, g, b, 0))
            elif brightness > 220:
                edge_alpha = int((240 - brightness) / 20 * 255)
                new_data.append((r, g, b, min(a, edge_alpha)))
            else:
                new_data.append((r, g, b, a))
    else:
        return img

    img.putdata(new_data)
    return img


def process_logos():
    """Process all source logos into multi-format exports."""
    transparent_logos = {}
    total = 0

    for name, meta in SOURCES.items():
        path = meta["path"]
        if not path.exists():
            print(f"  [SKIP] {name}")
            continue

        img = Image.open(path)
        w, h = img.size
        print(f"  [LOAD] {name}: {w}x{h} ({meta['bg']} bg, {meta['shape']})")

        # 1. Copy original at full quality
        orig_path = OUT / "originals" / f"{name}-original.png"
        img.save(orig_path, "PNG")
        total += 1

        # 2. Create transparent version
        trans = smart_make_transparent(img, meta["bg"])
        transparent_logos[name] = trans

        # 3. Export at each size
        for size in SIZES:
            # Skip upscaling beyond 2x original
            if size > max(w, h) * 2.5:
                continue

            # === TRANSPARENT PNG ===
            resized = resize_keep_aspect(trans, size)
            png_path = OUT / "png" / "transparent" / f"{name}-{size}px.png"
            resized.save(png_path, "PNG", optimize=True)
            total += 1

            # === ON DARK (premium gradient) ===
            dark_canvas = place_logo_on_canvas(trans, size, size, "dark", 0.6, True)

            dark_png = OUT / "png" / "on-dark" / f"{name}-dark-{size}px.png"
            dark_canvas.save(dark_png, "PNG", optimize=True)
            total += 1

            dark_webp = OUT / "webp" / "on-dark" / f"{name}-dark-{size}px.webp"
            dark_canvas.save(dark_webp, "WEBP", quality=95)
            total += 1

            dark_jpg = OUT / "jpg" / "on-dark" / f"{name}-dark-{size}px.jpg"
            dark_canvas.convert("RGB").save(dark_jpg, "JPEG", quality=95, subsampling=0)
            total += 1

            # === ON LIGHT (premium gradient) ===
            light_canvas = place_logo_on_canvas(trans, size, size, "light", 0.6, False)

            light_png = OUT / "png" / "on-light" / f"{name}-light-{size}px.png"
            light_canvas.save(light_png, "PNG", optimize=True)
            total += 1

            light_webp = OUT / "webp" / "on-light" / f"{name}-light-{size}px.webp"
            light_canvas.save(light_webp, "WEBP", quality=95)
            total += 1

            light_jpg = OUT / "jpg" / "on-light" / f"{name}-light-{size}px.jpg"
            light_canvas.convert("RGB").save(light_jpg, "JPEG", quality=95, subsampling=0)
            total += 1

        print(f"  [OK] {name}: done")

    return transparent_logos, total


def create_social_assets(transparent_logos):
    """Generate social media assets with premium backgrounds."""
    total = 0

    # Best logo for each aspect ratio
    square_logos = ["primary-dark", "social-avatar", "monogram", "icon-mark"]
    landscape_logos = ["horizontal-dark", "light-bg", "horizontal-light"]
    portrait_logos = ["vertical-lockup", "full-lockup"]

    for platform, (w, h) in SOCIAL.items():
        aspect = w / h

        if aspect > 2.5:
            # Very wide (linkedin banner) — use horizontal + smaller scale
            candidates = landscape_logos
            scale = 0.35
        elif aspect > 1.3:
            # Wide (youtube banner, twitter header)
            candidates = landscape_logos
            scale = 0.45
        elif aspect < 0.7:
            # Tall (instagram story)
            candidates = portrait_logos
            scale = 0.40
        else:
            # Square-ish
            candidates = square_logos
            scale = 0.55

        for logo_name in candidates:
            if logo_name not in transparent_logos:
                continue
            logo = transparent_logos[logo_name]

            # Subfolder
            if "instagram" in platform:
                sub = "instagram"
            elif "youtube" in platform:
                sub = "youtube"
            elif "twitter" in platform:
                sub = "twitter"
            elif "linkedin" in platform:
                sub = "linkedin"
            elif "facebook" in platform:
                sub = "facebook"
            elif "og" in platform:
                sub = "og"
            elif "favicon" in platform:
                sub = "favicon"
            else:
                sub = ""

            # DARK version (premium gradient + vignette)
            dark = place_logo_on_canvas(logo, w, h, "dark", scale, True)
            base_name = f"{platform}-{logo_name}"

            dark.save(OUT / "social" / sub / f"{base_name}-dark.png", "PNG", optimize=True)
            dark.convert("RGB").save(OUT / "social" / sub / f"{base_name}-dark.jpg", "JPEG", quality=95, subsampling=0)
            dark.save(OUT / "social" / sub / f"{base_name}-dark.webp", "WEBP", quality=95)
            total += 3

            # NAVY version (alternative dark)
            navy = place_logo_on_canvas(logo, w, h, "navy", scale, True)
            navy.save(OUT / "social" / sub / f"{base_name}-navy.png", "PNG", optimize=True)
            navy.convert("RGB").save(OUT / "social" / sub / f"{base_name}-navy.jpg", "JPEG", quality=95, subsampling=0)
            total += 2

            # LIGHT version
            light = place_logo_on_canvas(logo, w, h, "light", scale, False)
            light.save(OUT / "social" / sub / f"{base_name}-light.png", "PNG", optimize=True)
            light.convert("RGB").save(OUT / "social" / sub / f"{base_name}-light.jpg", "JPEG", quality=95, subsampling=0)
            total += 2

            break  # Best candidate per platform

    print(f"[OK] Created {total} social media assets")
    return total


def create_color_swatches():
    """Generate rich color swatch images."""
    total = 0
    size = 1024

    for name, hex_color in COLORS.items():
        rgb = hex_to_rgb(hex_color)

        # Gradient swatch (not flat)
        img = Image.new("RGB", (size, size))
        draw = ImageDraw.Draw(img)
        for y in range(size):
            t = y / size
            # Subtle lighter→darker gradient
            factor = 1.0 + 0.15 * (0.5 - t)
            r = max(0, min(255, int(rgb[0] * factor)))
            g = max(0, min(255, int(rgb[1] * factor)))
            b = max(0, min(255, int(rgb[2] * factor)))
            draw.line([(0, y), (size, y)], fill=(r, g, b))

        path = OUT / "color-swatches" / f"{name}-{hex_color.replace('#','')}.png"
        img.save(path, "PNG")
        img.save(path.with_suffix(".jpg"), "JPEG", quality=95)
        total += 2

    # Full palette strip (horizontal)
    swatch_w = 300
    strip = Image.new("RGB", (len(COLORS) * swatch_w, swatch_w), (0, 0, 0))
    draw = ImageDraw.Draw(strip)
    for i, (name, hex_color) in enumerate(COLORS.items()):
        rgb = hex_to_rgb(hex_color)
        x = i * swatch_w
        draw.rectangle([x, 0, x + swatch_w, swatch_w], fill=rgb)
    strip.save(OUT / "color-swatches" / "palette-strip.png", "PNG")
    strip.save(OUT / "color-swatches" / "palette-strip.jpg", "JPEG", quality=95)
    total += 2

    # Gold gradient strip
    gold_strip = Image.new("RGB", (2000, 400))
    draw = ImageDraw.Draw(gold_strip)
    golds = [
        hex_to_rgb("#8B7355"),  # Bronze
        hex_to_rgb("#B8960C"),  # Gold muted
        hex_to_rgb("#C9A84C"),  # Sacred gold
        hex_to_rgb("#D4AF37"),  # Gold soft
        hex_to_rgb("#C9A84C"),  # Sacred gold again
        hex_to_rgb("#8B7355"),  # Bronze
    ]
    segment = 2000 / (len(golds) - 1)
    for x in range(2000):
        idx = x / segment
        i = int(idx)
        t = idx - i
        if i >= len(golds) - 1:
            i = len(golds) - 2
            t = 1.0
        c1 = golds[i]
        c2 = golds[i + 1]
        r = int(c1[0] * (1 - t) + c2[0] * t)
        g = int(c1[1] * (1 - t) + c2[1] * t)
        b = int(c1[2] * (1 - t) + c2[2] * t)
        draw.line([(x, 0), (x, 400)], fill=(r, g, b))
    gold_strip.save(OUT / "color-swatches" / "gold-gradient.png", "PNG")
    gold_strip.save(OUT / "color-swatches" / "gold-gradient.jpg", "JPEG", quality=95)
    total += 2

    print(f"[OK] Created {total} color assets")
    return total


def create_watermarks(transparent_logos):
    """Create watermark versions."""
    total = 0
    for logo_name in ["icon-mark", "monogram", "primary-dark"]:
        if logo_name not in transparent_logos:
            continue
        img = transparent_logos[logo_name]

        for opacity in [0.10, 0.20, 0.40]:
            wm = img.copy()
            data = list(wm.getdata())
            new_data = [(r, g, b, int(a * opacity)) for r, g, b, a in data]
            wm.putdata(new_data)

            pct = int(opacity * 100)
            path = OUT / "png" / "transparent" / f"{logo_name}-watermark-{pct}pct.png"
            wm.save(path, "PNG")
            total += 1

    print(f"[OK] Created {total} watermark variants")
    return total


def build_manifest(total_assets):
    manifest = {
        "brand": BRAND,
        "colors": {
            name: {
                "hex": hex_val,
                "rgb": list(hex_to_rgb(hex_val)),
                "swatch": f"color-swatches/{name}-{hex_val.replace('#','')}.png",
            }
            for name, hex_val in COLORS.items()
        },
        "typography": {
            "heading": {"family": "Playfair Display", "weights": [400, 600, 700]},
            "body": {"family": "Inter Variable", "weights": [300, 400, 500, 600, 700]},
            "arabic_display": {"family": "Amiri", "weights": [400, 700]},
            "arabic_body": {"family": "Noto Naskh Arabic", "weights": [400, 600]},
        },
        "logos": {
            name: {
                "description": meta["desc"],
                "shape": meta["shape"],
                "original": f"originals/{name}-original.png",
                "transparent": f"png/transparent/{name}-1024px.png",
                "on_dark": f"png/on-dark/{name}-dark-1024px.png",
                "on_light": f"png/on-light/{name}-light-1024px.png",
                "sizes": SIZES,
            }
            for name, meta in SOURCES.items()
            if meta["path"].exists()
        },
        "social": {
            name: {"width": w, "height": h}
            for name, (w, h) in SOCIAL.items()
        },
        "guidelines": {
            "never": [
                "Pure black #000000", "Pure white #FFFFFF",
                "Islamic crescent", "Green dominant",
                "Mosque photos", "Islam/Muslim in titles",
                "Auto-play audio", "Pop-ups", "Chat widgets",
            ],
            "always": [
                "Dark mode forced", "Sacred Gold #C9A84C accent",
                "Gradual Islamic elements", "Masterclass/Apple aesthetic",
            ],
        },
        "total_assets": total_assets,
        "generated": "2026-03-01",
    }
    return manifest


def main():
    print("=" * 60)
    print("  KALAM Brand Kit v2 — Quality Edition")
    print("=" * 60)

    setup_dirs()

    print("\n── Processing Logos ──")
    transparent_logos, logo_count = process_logos()

    print("\n── Color Swatches ──")
    color_count = create_color_swatches()

    print("\n── Social Media ──")
    social_count = create_social_assets(transparent_logos)

    print("\n── Watermarks ──")
    wm_count = create_watermarks(transparent_logos)

    total = logo_count + color_count + social_count + wm_count

    print("\n── Manifest ──")
    manifest = build_manifest(total)
    with open(OUT / "brand-manifest.json", "w") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    # Final stats
    file_count = sum(1 for _ in OUT.rglob("*") if _.is_file())
    total_size = sum(f.stat().st_size for f in OUT.rglob("*") if f.is_file())

    # Check quality: count files > 10KB
    big_files = sum(1 for f in OUT.rglob("*") if f.is_file() and f.stat().st_size > 10240)

    print(f"\n{'=' * 60}")
    print(f"  DONE!")
    print(f"  Files: {file_count}")
    print(f"  Size: {total_size / (1024*1024):.1f} MB")
    print(f"  Files > 10KB: {big_files} ({big_files/max(file_count,1)*100:.0f}%)")
    print(f"  Files < 10KB: {file_count - big_files}")

    # List any small files
    small = [f for f in OUT.rglob("*") if f.is_file() and f.stat().st_size < 5120]
    if small:
        print(f"\n  [WARN] {len(small)} files < 5KB (favicons/watermarks only):")
        for s in small[:5]:
            print(f"    {s.relative_to(OUT)}: {s.stat().st_size}B")

    print(f"{'=' * 60}")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Upload Kalam brand kit to Izzat Hub Supabase Storage + update partner branding.
"""

import os
import sys
import json
import subprocess
from pathlib import Path

# Load env from Hub
env_path = Path(os.path.expanduser("~/Desktop/izzat-hub/.env"))
env = {}
with open(env_path) as f:
    for line in f:
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            key, val = line.split("=", 1)
            env[key.strip()] = val.strip()

SUPABASE_URL = env["SUPABASE_URL"]
SERVICE_KEY = env["SUPABASE_SERVICE_KEY"]
BRAND_KIT = Path(os.path.expanduser("~/Desktop/kalam/idv/brand-kit"))
PARTNER_ID = "b0c8684c-0c76-4b37-80d8-0133274d041f"
STUDIO_PARTNER_ID = "d7a35ab0-3e5b-4b09-8712-f9d253e7f67b"

# Files to upload (most important ones for AI content generation)
UPLOADS = {
    # Originals (master files)
    "originals/primary-dark-original.png": "partners/kalam/originals/primary-dark.png",
    "originals/icon-mark-original.png": "partners/kalam/originals/icon-mark.png",
    "originals/vertical-lockup-original.png": "partners/kalam/originals/vertical-lockup.png",
    "originals/horizontal-dark-original.png": "partners/kalam/originals/horizontal-dark.png",
    "originals/social-avatar-original.png": "partners/kalam/originals/social-avatar.png",
    "originals/monogram-original.png": "partners/kalam/originals/monogram.png",
    "originals/arabic-only-original.png": "partners/kalam/originals/arabic-only.png",
    "originals/full-lockup-original.png": "partners/kalam/originals/full-lockup.png",
    "originals/main-original.png": "partners/kalam/originals/main.png",

    # High-res transparent PNGs (2048px - best for AI)
    "png/transparent/primary-dark-2048px.png": "partners/kalam/transparent/primary-dark-2048.png",
    "png/transparent/icon-mark-2048px.png": "partners/kalam/transparent/icon-mark-2048.png",
    "png/transparent/vertical-lockup-2048px.png": "partners/kalam/transparent/vertical-lockup-2048.png",
    "png/transparent/horizontal-dark-2048px.png": "partners/kalam/transparent/horizontal-dark-2048.png",
    "png/transparent/monogram-2048px.png": "partners/kalam/transparent/monogram-2048.png",
    "png/transparent/arabic-only-2048px.png": "partners/kalam/transparent/arabic-only-2048.png",
    "png/transparent/main-2048px.png": "partners/kalam/transparent/main-2048.png",

    # On-dark (premium gradient) - 2048px
    "png/on-dark/primary-dark-dark-2048px.png": "partners/kalam/on-dark/primary-dark-2048.png",
    "png/on-dark/icon-mark-dark-2048px.png": "partners/kalam/on-dark/icon-mark-2048.png",
    "png/on-dark/vertical-lockup-dark-2048px.png": "partners/kalam/on-dark/vertical-lockup-2048.png",
    "png/on-dark/horizontal-dark-dark-2048px.png": "partners/kalam/on-dark/horizontal-dark-2048.png",
    "png/on-dark/monogram-dark-2048px.png": "partners/kalam/on-dark/monogram-2048.png",
    "png/on-dark/social-avatar-dark-2048px.png": "partners/kalam/on-dark/social-avatar-2048.png",

    # On-dark 1024px (web-ready)
    "png/on-dark/primary-dark-dark-1024px.png": "partners/kalam/on-dark/primary-dark-1024.png",
    "png/on-dark/icon-mark-dark-1024px.png": "partners/kalam/on-dark/icon-mark-1024.png",

    # On-light 2048px
    "png/on-light/primary-dark-light-2048px.png": "partners/kalam/on-light/primary-dark-2048.png",
    "png/on-light/icon-mark-light-2048px.png": "partners/kalam/on-light/icon-mark-2048.png",
    "png/on-light/horizontal-dark-light-2048px.png": "partners/kalam/on-light/horizontal-dark-2048.png",

    # Social media - Instagram
    "social/instagram/instagram-post-primary-dark-dark.png": "partners/kalam/social/ig-post-dark.png",
    "social/instagram/instagram-post-primary-dark-dark.jpg": "partners/kalam/social/ig-post-dark.jpg",
    "social/instagram/instagram-story-vertical-lockup-dark.png": "partners/kalam/social/ig-story-dark.png",
    "social/instagram/instagram-story-vertical-lockup-dark.jpg": "partners/kalam/social/ig-story-dark.jpg",
    "social/instagram/instagram-profile-primary-dark-dark.png": "partners/kalam/social/ig-profile-dark.png",

    # Social media - YouTube
    "social/youtube/youtube-banner-horizontal-dark-dark.png": "partners/kalam/social/yt-banner-dark.png",
    "social/youtube/youtube-banner-horizontal-dark-dark.jpg": "partners/kalam/social/yt-banner-dark.jpg",
    "social/youtube/youtube-thumbnail-horizontal-dark-dark.jpg": "partners/kalam/social/yt-thumb-dark.jpg",
    "social/youtube/youtube-profile-primary-dark-dark.png": "partners/kalam/social/yt-profile-dark.png",

    # Social media - Twitter/X
    "social/twitter/twitter-header-horizontal-dark-dark.png": "partners/kalam/social/x-header-dark.png",
    "social/twitter/twitter-profile-primary-dark-dark.png": "partners/kalam/social/x-profile-dark.png",

    # Social media - LinkedIn
    "social/linkedin/linkedin-banner-horizontal-dark-dark.png": "partners/kalam/social/li-banner-dark.png",
    "social/linkedin/linkedin-profile-primary-dark-dark.png": "partners/kalam/social/li-profile-dark.png",

    # Social media - OG
    "social/og/og-image-horizontal-dark-dark.png": "partners/kalam/social/og-image-dark.png",
    "social/og/og-image-horizontal-dark-dark.jpg": "partners/kalam/social/og-image-dark.jpg",

    # Favicons
    "social/favicon/favicon-512-primary-dark-dark.png": "partners/kalam/favicon/512.png",
    "social/favicon/favicon-192-primary-dark-dark.png": "partners/kalam/favicon/192.png",

    # Color swatches
    "color-swatches/sacred-gold-C9A84C.png": "partners/kalam/colors/sacred-gold.png",
    "color-swatches/midnight-0A0A0A.png": "partners/kalam/colors/midnight.png",
    "color-swatches/ivory-F5F5F0.png": "partners/kalam/colors/ivory.png",
    "color-swatches/deep-navy-1A1A2E.png": "partners/kalam/colors/deep-navy.png",
    "color-swatches/bronze-8B7355.png": "partners/kalam/colors/bronze.png",
    "color-swatches/gold-gradient.png": "partners/kalam/colors/gold-gradient.png",
    "color-swatches/palette-strip.png": "partners/kalam/colors/palette-strip.png",

    # WebP versions (key ones)
    "webp/on-dark/primary-dark-dark-2048px.webp": "partners/kalam/webp/primary-dark-2048.webp",
    "webp/on-dark/icon-mark-dark-2048px.webp": "partners/kalam/webp/icon-mark-2048.webp",

    # Watermarks
    "png/transparent/icon-mark-watermark-10pct.png": "partners/kalam/watermarks/icon-mark-10pct.png",
    "png/transparent/icon-mark-watermark-20pct.png": "partners/kalam/watermarks/icon-mark-20pct.png",
    "png/transparent/icon-mark-watermark-40pct.png": "partners/kalam/watermarks/icon-mark-40pct.png",

    # Brand manifest
    "brand-manifest.json": "partners/kalam/brand-manifest.json",
}


def get_mime(filepath):
    ext = filepath.rsplit(".", 1)[-1].lower()
    return {
        "png": "image/png",
        "jpg": "image/jpeg",
        "jpeg": "image/jpeg",
        "webp": "image/webp",
        "json": "application/json",
    }.get(ext, "application/octet-stream")


def upload_file(local_path, storage_path):
    """Upload a file to Supabase Storage using curl."""
    mime = get_mime(str(local_path))
    url = f"{SUPABASE_URL}/storage/v1/object/uploads/{storage_path}"

    result = subprocess.run([
        "curl", "-s", "-w", "%{http_code}",
        "-X", "POST",
        "-H", f"Authorization: Bearer {SERVICE_KEY}",
        "-H", f"Content-Type: {mime}",
        "-H", "x-upsert: true",
        "--data-binary", f"@{local_path}",
        url
    ], capture_output=True, text=True, timeout=60)

    status = result.stdout[-3:] if len(result.stdout) >= 3 else "???"
    body = result.stdout[:-3] if len(result.stdout) > 3 else result.stdout
    return status, body


def main():
    print("=" * 60)
    print("  KALAM → Izzat Hub Upload")
    print("=" * 60)
    print(f"  Supabase: {SUPABASE_URL}")
    print(f"  Partner: {PARTNER_ID}")
    print(f"  Files to upload: {len(UPLOADS)}")
    print()

    uploaded = []
    failed = []
    urls = {}

    for local_rel, storage_path in UPLOADS.items():
        local_path = BRAND_KIT / local_rel
        if not local_path.exists():
            print(f"  [SKIP] {local_rel} — not found")
            failed.append(local_rel)
            continue

        size_kb = local_path.stat().st_size / 1024
        status, body = upload_file(local_path, storage_path)

        if status in ("200", "201"):
            public_url = f"{SUPABASE_URL}/storage/v1/object/public/uploads/{storage_path}"
            urls[local_rel] = public_url
            uploaded.append(local_rel)
            print(f"  [OK] {local_rel} ({size_kb:.0f}KB) → {storage_path}")
        else:
            print(f"  [FAIL:{status}] {local_rel} → {body[:100]}")
            failed.append(local_rel)

    print(f"\n  Uploaded: {len(uploaded)}/{len(UPLOADS)}")
    print(f"  Failed: {len(failed)}")

    # Save URL map
    url_map_path = BRAND_KIT / "uploaded-urls.json"
    with open(url_map_path, "w") as f:
        json.dump(urls, f, indent=2)
    print(f"\n  URL map saved: {url_map_path}")

    # Print key URLs for branding update
    base = f"{SUPABASE_URL}/storage/v1/object/public/uploads/partners/kalam"
    print(f"\n  === KEY URLS ===")
    print(f"  Avatar: {base}/on-dark/primary-dark-1024.png")
    print(f"  Logo Dark: {base}/on-dark/primary-dark-2048.png")
    print(f"  Logo Light: {base}/on-light/primary-dark-2048.png")
    print(f"  Icon Mark: {base}/transparent/icon-mark-2048.png")
    print(f"  Manifest: {base}/brand-manifest.json")

    return urls, base


if __name__ == "__main__":
    urls, base = main()

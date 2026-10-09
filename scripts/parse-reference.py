#!/usr/bin/env python3
"""Parse reference HTML and extract structure, sections, and image URLs."""
import re
from pathlib import Path

html = Path('/home/z/my-project/reference.html').read_text()

# Extract all image URLs (both relative and absolute)
img_pattern = re.compile(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', re.IGNORECASE)
images = img_pattern.findall(html)
print("=== ALL IMAGE URLS ===")
for img in images:
    print(f"  {img}")

# Extract section markers
section_pattern = re.compile(r'<!--\s*(Start|End)\s+(.+?)\s+-->', re.IGNORECASE)
sections = []
for match in section_pattern.finditer(html):
    sections.append((match.group(1), match.group(2).strip()))

print("\n=== SECTIONS ===")
for s_type, s_name in sections:
    prefix = "+" if s_type.lower() == "start" else "-"
    print(f"  {prefix} {s_name}")

# Extract headings (h1-h6)
heading_pattern = re.compile(r'<h([1-6])[^>]*>(.*?)</h\1>', re.IGNORECASE | re.DOTALL)
headings = heading_pattern.findall(html)
print("\n=== HEADINGS ===")
for level, text in headings:
    clean = re.sub(r'<[^>]+>', '', text).strip()
    if clean:
        print(f"  H{level}: {clean[:120]}")

# Extract section ids (for anchor nav)
id_pattern = re.compile(r'<(?:section|div)[^>]+id=["\']([^"\']+)["\']', re.IGNORECASE)
ids = id_pattern.findall(html)
print("\n=== SECTION/DIV IDs ===")
for i in sorted(set(ids)):
    print(f"  #{i}")

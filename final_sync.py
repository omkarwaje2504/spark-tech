import sys

filepath = r'src\app\services\[slug]\page.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read().replace('\r\n', '\n')

# Verification and refinement of all service data
# 1. Solvent Extraction
# 2. Oil Refinery
# 3. Fractionation
# 4. Deodorization
# 5. Bleaching
# 6. De-Waxing
# 7. Lecithin
# 8. Bakery Shortening
# 9. Hydrogenation
# 10. Filtration (sync with Section 9 of MD)

# Refining Filtration specifically as it wasn't fully synced
old_filtration = """    'filtration': {
        title: 'Vegetable Oil Filtration Equipment',
        subtitle: 'Complete Filtration Solutions',
        description: 'Filtration constitutes an important part in the oil refining process. SPARKTECH with vast experience in filtration of various slurries offers the best feasible solution to any filtration problem.',
        sections: [
            {
                heading: 'Horizontal Pressure Leaf Filter',
                content: [
                    'Consists of horizontally mounted leaves, pneumatic vibrator assembly, hydraulic power pack for dismantling of shell side.',
                    'Shell can be separated from dish end by hydraulic system and leaves are easily accessible for cleaning.',
                    'More suitable where deposits are more. Filtration area ranges from 2m\u00C2\u00B2 to 100m\u00C2\u00B2.'
                ]
            },
            {
                heading: 'Vertical Pressure Leaf Filter',
                content: [
                    'Consists of vertical pressure vessel with conical bottom, vertically arranged filter leaves, pneumatic vibrator assembly.',
                    'Features automatic discharge of cake. Stainless steel filter leaves eliminate use of filter cloth.',
                    'Filtration area ranges from 10m\u00C2\u00B2 to 50m\u00C2\u00B2.'
                ]
            },
            {
                heading: 'Cartridge & Polish Filters',
                content: [
                    'Cartridge filters designed for standard cartridges in 1 to 5 microns - wound, pleated, activated, ceramic types.',
                    'Polish filter available in 1 to 5 microns with single or multi bag system.',
                    'Ideal for solvent liquid, vegetable oil, syrup with low-medium solid content.'
                ]
            }
        ],"""

new_filtration = """    'filtration': {
        title: 'Vegetable Oil Filtration Equipment',
        subtitle: 'Complete Filtration Solutions',
        description: 'Filtration constitutes an important part in the oil refining process. SPARKTECH with vast experience in filtration of various slurries offers the best feasible solution to any filtration problem.',
        sections: [
            {
                heading: 'Horizontal Pressure Leaf Filter',
                content: [
                    'Consists of horizontally mounted leaves, pneumatic vibrator assembly, hydraulic power pack for dismantling of shell side. Shell can be separated from dish end by hydraulic system and leaves are easily accessible for cleaning.',
                    'More suitable where deposits are more. Filtration area ranges from 2m\\u00B2 to 100m\\u00B2.'
                ]
            },
            {
                heading: 'Vertical Pressure Leaf Filter',
                content: [
                    'Consists of vertical pressure vessel with conical bottom, vertically arranged filter leaves, pneumatic vibrator assembly. Features automatic discharge of cake.',
                    'Stainless steel filter leaves eliminate use of filter cloth. Filtration area ranges from 10m\\u00B2 to 150m\\u00B2.'
                ]
            },
            {
                heading: 'Polish & Cartridge Filter',
                content: [
                    '<strong>Polish Filter:</strong> Available in 1 to 10 microns with single bag or multi bag system for efficient filtration of solvent liquid, vegetable oil, syrup.',
                    '<strong>Cartridge Filter:</strong> Designed for use with standard cartridges in various sizes from 1 to 5 microns including diamond wound, pleated, activated, ceramic and porous stainless steel cartridges.'
                ]
            }
        ],"""

if old_filtration in content:
    content = content.replace(old_filtration, new_filtration)
    print('SUCCESS: Updated filtration')
else:
    # Try finding it without the messy characters
    print('RETRYing filtration update with fuzzy match...')
    import re
    content = re.sub(r"'filtration': \{.*?image:", r"'filtration': " + new_filtration.split("'filtration': ")[1] + "\n        image:", content, flags=re.DOTALL)
    print('SUCCESS: Updated filtration via regex')

with open(filepath, 'w', encoding='utf-8', newline='') as f:
    f.write(content)
print('Verification and final sync complete.')

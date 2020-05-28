# Global CSS Elements

## Typography

1. Use las siguientes clases solo para titulos, puede combinarlos para obtener los resultados esperados.

    ```bash
    e-h[1|2|3|4]         # De 0px ->
    e-h[1|2|3|4]:sm      # De 600px ->
    e-h[1|2|3|4]:md      # De 960px ->
    e-h[1|2|3|4]:lg      # De 1280px ->
    e-h[1|2|3|4]:xl      # De 1920px ->
    ```

2. Use las siguientes clases solo para textos pequeños o párrafos, puede combinarlos para obtener los resultados esperados.

    ```bash
    e-text-[1|2|3|4]         # De 0px ->
    e-text-[1|2|3|4]:sm      # De 600px ->
    e-text-[1|2|3|4]:md      # De 960px ->
    e-text-[1|2|3|4]:lg      # De 1280px ->
    e-text-[1|2|3|4]:xl      # De 1920px ->
    ```

3. Otras clases que afectan solo a textos.

    ```bash
    e-text-[uppercase|lowercase|capitalize]   # text-transform
    e-text-[center|left|right|justify]        # text-align
    e-text-[bold|medium|normal|light]         # font-weight
    e-text-reset                              # text-transform: none | font-size: inherit | font-weight: normal
    ```

## Spacing

```
e-[p|m][t|r|b|l|a|x|y]-[none|auto|xs|sm|md|lg|xl]
    T       D                   S

T - type
  - values: p (padding), m (margin)

D - direction
  - values:
      t (top), r (right), b (bottom), l (left),
      a (all), x (both left & right), y (both top & bottom)

S - size
  - values:
      none,
      auto (ONLY for specific margins: e-ml-*, e-mr-*, e-mx-*),
      xs (extra small),
      sm (small),
      md (medium),
      lg (large),
      xl (extra large)
```

## Helpers

```bash
e-placeholder       # Configura placeholder de los inputs
e-max-width         # Limite del contenido (max-width: 1200px)
e-max-width-extra   # Limite especial (max-width: 1320px)
```

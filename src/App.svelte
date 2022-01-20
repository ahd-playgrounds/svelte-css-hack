<main>
  <p class="p-stuff">I am a large block of p text, and I should get styles</p>
  <div>
    {@html embeddedStyle}
  </div>
</main>

<script lang="ts">
  import type { PartialStyles } from "./style-config";

  export let styles: PartialStyles;

  let embeddedStyle = `
  <style>
  .p-stuff {
    ${css(styles?.theme?.p?.base ?? {})}
  }

  .p-stuff:hover {
    ${css(styles?.theme?.p?.[":hover"] ?? {})}

   }
  </style>
  `;

  function css(styles: Record<string, string>): string {
    const s = Object.entries(styles)
      .map(([k, v]) => `${k}: ${v} !important ;`)
      .join("\n");
    return s;
  }
</script>

<style>
  .p-stuff {
    color: green;
  }
</style>

import { defineConfig, createSystem } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    // ---------- TOKENS ----------
    tokens: {
      colors: {
        brand: {
          orange: {
            50:  { value: "#FFF3E5" },
            100: { value: "#FFE0BF" },
            200: { value: "#FFCC99" },
            300: { value: "#FFB873" },
            400: { value: "#FFA34D" },
            500: { value: "#FF8F26" },
            600: { value: "#E6781A" },
            700: { value: "#CC610F" },
            800: { value: "#B24A05" },
            900: { value: "#993300" }
          },
          gray: {
            50:  { value: "#F7F7F7" },
            100: { value: "#EDEDED" },
            200: { value: "#DCDCDC" },
            300: { value: "#C2C2C2" },
            400: { value: "#A8A8A8" },
            500: { value: "#8F8F8F" },
            600: { value: "#6F6F6F" },
            700: { value: "#515151" },
            800: { value: "#333333" },
            900: { value: "#1A1A1A" }
          },
          red: {
            50:  { value: "#FFE8E8" },
            100: { value: "#FFCFCF" },
            200: { value: "#FFA6A6" },
            300: { value: "#FF7D7D" },
            400: { value: "#FF5454" },
            500: { value: "#FF2B2B" },  // main red
            600: { value: "#CC1F1F" },
            700: { value: "#991515" },
            800: { value: "#660B0B" },
            900: { value: "#330404" }
          },
          blue: {
            50:  { value: "#E8F1FF" },
            100: { value: "#CFE2FF" },
            200: { value: "#A6C7FF" },
            300: { value: "#7DABFF" },
            400: { value: "#548FFF" },
            500: { value: "#2B73FF" },   // main blue
            600: { value: "#1F59CC" },
            700: { value: "#154099" },
            800: { value: "#0B2766" },
            900: { value: "#041033" }
          },
          green: {
            50:  { value: "#E7FAF1" },
            100: { value: "#CFF5E3" },
            200: { value: "#A0EBC8" },
            300: { value: "#72E1AC" },
            400: { value: "#43D791" },
            500: { value: "#14CD75" },
            600: { value: "#10A65F" },
            700: { value: "#0C7F48" },
            800: { value: "#085932" },
            900: { value: "#04321B" }
          }
        },

        fonts: {
          body:    { value: "Inter, sans-serif" },
          heading: { value: "Inter, sans-serif" },
        }
      },
    },

    // ---------- SEMANTIC TOKENS (LIGHT + DARK) ----------
    semanticTokens: {
      colors: {
        bg: {
          default: { value: "#ffffff" },
          _dark:   { value: "#1A1A1A" }
        },
        surface: {
          default: { value: "#F9F9F9" },
          _dark:   { value: "#252525" }
        },
        text: {
          default: { value: "#1A1A1A" },
          _dark:   { value: "#F1F1F1" }
        },
        brandPrimary: {
          default: { value: "{colors.brand.orange.500}" },
          _dark:   { value: "{colors.brand.orange.300}" }
        },
        brandSecondary: {
          default: { value: "{colors.brand.green.500}" },
          _dark:   { value: "{colors.brand.green.300}" }
        }
      }
    }
  }
});

export const theme = createSystem(config);

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      text: string;
      textSecondary: string;
      title: string;
      background: string;
      cardBackground: string;
      cardBorder: string;
      cardShadow: string;
      buttonText: string;
      buttonBackground: string;
      buttonHover: string;
      link: string;
      linkHover: string;
      badgeText: string;
      badgeBackground: string;
      transition: string;
      error: string;
      success: string;
      disabledBg: string;
      disabledText: string;
      highlight: string;
      shadow: string;
      border: string;
    };
    types: {
      normal: string;
      fire: string;
      water: string;
      electric: string;
      grass: string;
      ice: string;
      fighting: string;
      poison: string;
      ground: string;
      flying: string;
      psychic: string;
      bug: string;
      rock: string;
      ghost: string;
      dragon: string;
      dark: string;
      steel: string;
      fairy: string;
    };
  }
}
let config: {
    plugins: { handler: () => void }[];
    theme: {
        container: { screens: { "2xl": string }; center: boolean };
        extend: {
            keyframes: {
                "accordion-up": { from: { height: string }; to: { height: string } };
                "accordion-down": { from: { height: string }; to: { height: string } }
            };
            borderRadius: { md: string; sm: string; lg: string };
            colors: {
                border: string;
                secondary: { foreground: string; DEFAULT: string };
                input: string;
                ring: string;
                background: string;
                popover: { foreground: string; DEFAULT: string };
                foreground: string;
                muted: { foreground: string; DEFAULT: string };
                accent: { foreground: string; DEFAULT: string };
                destructive: { foreground: string; DEFAULT: string };
                card: { foreground: string; DEFAULT: string };
                primary: { foreground: string; DEFAULT: string }
            };
            animation: { "accordion-up": string; "accordion-down": string }
        };
        fontFamily: { timesnew: string[] }
    };
    important?: boolean;
    content: string[]
};
config = {
    content: [
        './src/components/**/*.{ts,tsx}',
        './src/app/**/*.{ts,tsx}',
    ],
    theme: {
        fontFamily: {
            'timesnew': ['TimesNewRoman'],
        },
        container: {
            center: true,
            screens: {
                "2xl": "1280px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                sm: "var(--radius)",
                md: "calc(var(--radius) + 10px)",
                lg: "calc(var(--radius) + 15px)",
            },
            keyframes: {
                "accordion-down": {
                    from: {height: "0"},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: "0"},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    // important: true,
    plugins: [require("tailwindcss-animate")],
};
export default config;

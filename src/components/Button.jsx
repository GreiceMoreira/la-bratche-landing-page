export default function Button ({
    children,
    href,
    className = "",
    variant = "primary",
}) {
      const variants = {
    primary: `
      bg-brand-orange
      text-white
      hover:opacity-90
    `,
    secondary: `
      border
      border-brand-orange
      text-brand-orange
      hover:bg-brand-orange
      hover:text-white
    `,
    }

    const styles = `
        rounded-full
        px-8
        py-3
        font-semibold
        transition
        duration-300
        ${variants[variant]}
        ${className}
    `
    if (href) {
        return (
            <a href={href} className={styles}>
                {children}
            </a>
        )
    }

    return (
        <button className={styles}>
            {children}
        </button>
    )
}
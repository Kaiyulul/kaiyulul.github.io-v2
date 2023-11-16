import React from "react";

export default function Observer(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                } else {
                    setVisible(false);
                }
            });
          });
          observer.observe(domRef.current);
          return () => observer.unobserve(domRef.current);
        }, []);
        return (
            <div ref={domRef} 
            className={`scrollSection ${isVisible ? "isVisible" : ""}`}
            style={{transitionDelay: `${props.delay}`}}>
                {props.children}
            </div>
        );
}
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
            className={`nameScroll ${isVisible ? "isVisible" : ""} name ${props.name}`}
            style={{transitionDelay: `${props.delay}`}}>
                {props.children}
            </div>
        );
}

// const observer = IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isInterescting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));    
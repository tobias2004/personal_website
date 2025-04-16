export const markdownComponents = {
    h1: (props) => <h1 className="text-white text-[26pt] font-serif mb-4" {...props} />,
    h2: (props) => <h2 className="text-gray-300 text-[20pt] font-serif mb-3" {...props} />,
    h3: (props) => <h3 className="text-blue-400 text-[16pt] font-serif mb-2" {...props} />,
    p: (props) => <p className="text-white text-[12pt] mb-3" {...props} />,
    li: (props) => (
      <li
        className="pl-8 relative text-white text-[12pt] mb-2 before:absolute before:left-0 before:top-1 before:content-[url(/check.svg)]"
        {...props}
      />
    ),
    a: (props) => <a className="text-blue-400 hover:underline" {...props} />,
  };
  
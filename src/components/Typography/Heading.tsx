import React, { HTMLProps, ReactNode } from 'react';

enum HeadingTag {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6'
}

interface H3Props extends HTMLProps<HTMLHeadingElement> {
    children: ReactNode;
    tag: HeadingTag;
}

export function Heading({tag, children, ...props}: H3Props) {
    const TagName = tag;

    return (
        <TagName {...props}>{children}</TagName>
    )
}

Heading.tags = HeadingTag;
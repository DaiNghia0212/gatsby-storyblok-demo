import React from "react"
import { StoryblokComponent } from "@storyblok/react"
import {
  render,
  NODE_PARAGRAPH,
  NODE_IMAGE,
  NODE_HR,
  MARK_STYLED,
  MARK_LINK,
  NODE_UL,
  NODE_LI,
  NODE_OL,
} from "storyblok-rich-text-react-renderer"

const RichText = ({ content }) => {
  return render(content, {
    markResolvers: {
      [MARK_STYLED]: (children, props) => {
        return <span className={props.class}>{children}</span>
      },
      [MARK_LINK]: (children, attrs) => {
        const href =
          attrs.linktype === "email" ? `mailto:${attrs.href}` : attrs.href
        return (
          <a href={href} className="text-primary underline underline-offset-1">
            {children}
          </a>
        )
      },
    },
    nodeResolvers: {
      [NODE_HR]: () => {
        return <hr className="my-[20px]" />
      },
      [NODE_IMAGE]: (children, props) => {
        return (
          <figure>
            <img
              className="max-w-[80%] my-[20px] m-auto"
              src={props.src}
              alt={props.alt}
            />
            <figcaption className="text-body text-center mt-[10px]">
              {props.title}
            </figcaption>
          </figure>
        )
      },
      [NODE_PARAGRAPH]: children => {
        return children ? (
          <div className="text-body mb-[1rem]">
            {" "}
            {children.map(child => {
              return child
            })}{" "}
          </div>
        ) : (
          <br />
        )
      },
      [NODE_UL]: children => {
        return (
          <ul className="list-disc list-inside text-body">
            {children.map(child => {
              return child
            })}
          </ul>
        )
      },
      [NODE_LI]: children => {
        return (
          <li className="[&>div]:inline text-body mb-[1rem]">
            {children.map(child => {
              return child
            })}
          </li>
        )
      },
      [NODE_OL]: children => {
        return (
          <ol className="list-decimal list-inside text-body">
            {children.map(child => {
              return child
            })}
          </ol>
        )
      },
    },
    defaultBlokResolver: (name, props) => {
      return <StoryblokComponent blok={{ ...props, component: name }} />
    },
  })
}

export default RichText

import React from 'react'
import { ImageAccordionItem } from './components'

export default function Item({item,,handleToggle,isActive,index}) {
  return (
    <ImageAccordionItem
							key={item.bgImage}
							className={`image-accordion-item ${isActive}`}
							onClick={() => handleToggle(index)}
						>
							<img className='bg' src={item.bgImage} />
							<img className='thumbnail' src={item.thumbnail} />
							<div className='content'>
								<h2>{item.title}</h2>
								<div className='stack'>
									{item.stack.map((tech, index) => (
										<StackLogo
											href={tech.url}
											key={index}
											target='_blank'
											rel='noopener noreferrer'
											dropShadow={tech.color}
										>
											<img src={tech.image} alt={tech.url} />
										</StackLogo>
									))}
								</div>
							</div>
						</ImageAccordionItem>
  )
}

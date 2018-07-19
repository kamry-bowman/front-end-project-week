import React from 'react';
import styled from 'styled-components';
import { DragSource, connectDragSource } from 'react-dnd';
import MarkdownText from './MarkdownText';
import { ItemTypes } from '../dndLogic.js';

const StyledNotePreview = styled.div`
  width: ${props => props.theme.dimensions.notePreview.width};
  height: ${props => props.theme.dimensions.notePreview.height};
  border-color: ${props => props.theme.color.border};
  border-style: solid;
  border-width: ${props => props.theme.dimensions.notePreview.borderWidth};
  padding: ${props => props.theme.dimensions.notePreview.padding};
  background-color: ${props => props.theme.color.previewNoteBG};

  /* OVERFLOW LOGIC START */
  overflow: hidden;
  position: relative;

  :after {
  /* points in the end */
  content: '';
  /* absolute position */
  position: absolute;
  /* set position to right bottom corner of text */
  right: 0;
  /* set width and height */
  width: 1em;
  height: 1em;
  margin-top: 0.2em;
  /* bg color = bg color under block */
  background: ${props => props.theme.color.previewNoteBG};
  }
  /*OVERFLOW LOGIC END*/

  h2 {
    padding: ${props => props.theme.dimensions.notePreview.headingPadding};
    font-family: ${props => props.theme.font.heading};
    font-size: ${props => props.theme.dimensions.notePreview.headingFontSize};
    overflow-wrap: break-word;
  }

  div {
    color: ${props => props.theme.color.generalText};
    font-size: ${props => props.theme.dimensions.notePreview.textFontSize};
    padding: ${props => props.theme.dimensions.notePreview.textPadding};
    border-top: ${props => props.theme.dimensions.notePreview.borderWidth} solid
      ${props => props.theme.color.border};
    line-height: ${props => props.theme.dimensions.notePreview.textLineHeight};
    overflow-wrap: break-word;
    white-space: line-pre;
  }
`;

const noteSourceSpec = {
  beginDrag(props) {
    return { noteId: props.note.id };
  }
}

function collect(connect, monitor) {
  return { 
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

const NotePreview = props => {
  const { title, textBody, tags } = props.note;
  // const { color, font } = props.theme;
  return (
    <StyledNotePreview
      innerRef={innerRef => props.connectDragSource(innerRef)}>
      <h2>{title}</h2>
      <MarkdownText mdText={textBody} />
    </StyledNotePreview>
  );
};

export default DragSource(ItemTypes.NOTE, noteSourceSpec, collect)(NotePreview);
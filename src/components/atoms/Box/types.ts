export type BoxStyleProps = {
  m?: string;
  p?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minHeight?: string;
  minWidth?: string;
  display?: 'block' | 'flex';
  position?: 'relative' | 'absolute' | 'static';
  flexDirection?: 'row' | 'column';
  flexWrap?: 'wrap' | 'nowrap';
  flex?: string;
  justifyContent?: 'flex-start' | 'flex-end' | 'center';
  alignItems?: 'flex-start' | 'flex-end' | 'center';
};

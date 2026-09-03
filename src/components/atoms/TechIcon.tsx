import {
  TypescriptOriginal,
  JavascriptOriginal,
  DartOriginal,
  JavaOriginal,
  ReactOriginal,
  NextjsOriginal,
  FlutterOriginal,
  AmazonwebservicesOriginalWordmark,
  TailwindcssOriginal,
  FigmaOriginal,
  GitOriginal,
  DotnetcoreOriginal,
  Html5Original,
  Css3Original,
  SassOriginal,
  AngularOriginal,
  VuejsOriginal,
  SpringOriginal,
  PhpOriginal,
  LaravelOriginal,
  JestPlain,
  WordpressOriginal,
  MysqlOriginal,
  FirebaseOriginal,
  AzureOriginal,
  UnityOriginal,
} from 'devicons-react'

type TechIconProps = {
  id: string
  color?: string
  size?: number
}

export default function TechIcon({ id, color = '#c0c0c8', size = 28 }: TechIconProps) {
  const iconProps = { size: size.toString() }

  switch (id) {
    case 'typescript':
      return <TypescriptOriginal {...iconProps} />
    case 'javascript':
      return <JavascriptOriginal {...iconProps} />
    case 'dart':
      return <DartOriginal {...iconProps} />
    case 'java':
      return <JavaOriginal {...iconProps} />
    case 'react':
      return <ReactOriginal {...iconProps} />
    case 'nextjs':
      return <NextjsOriginal {...iconProps} />
    case 'flutter':
      return <FlutterOriginal {...iconProps} />
    case 'aws':
      return <AmazonwebservicesOriginalWordmark {...iconProps} />
    case 'tailwind':
      return <TailwindcssOriginal {...iconProps} />
    case 'figma':
      return <FigmaOriginal {...iconProps} />
    case 'git':
      return <GitOriginal {...iconProps} />
    case 'github':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            fillRule="evenodd"
            d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
          />
        </svg>
      )
    case 'dotnet':
    case '.net':
      return <DotnetcoreOriginal {...iconProps} />
    case 'html5':
      return <Html5Original {...iconProps} />
    case 'css3':
      return <Css3Original {...iconProps} />
    case 'sass':
      return <SassOriginal {...iconProps} />
    case 'angular':
      return <AngularOriginal {...iconProps} />
    case 'vue':
      return <VuejsOriginal {...iconProps} />
    case 'spring':
      return <SpringOriginal {...iconProps} />
    case 'php':
      return <PhpOriginal {...iconProps} />
    case 'laravel':
      return <LaravelOriginal {...iconProps} />
    case 'jest':
      return <JestPlain {...iconProps} />
    case 'wordpress':
      return <WordpressOriginal {...iconProps} />
    case 'mysql':
      return <MysqlOriginal {...iconProps} />
    case 'firebase':
      return <FirebaseOriginal {...iconProps} />
    case 'azure':
      return <AzureOriginal {...iconProps} />
    case 'unity':
      return <UnityOriginal {...iconProps} />
    case 'sql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5}>
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
          <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      )
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      )
  }
}

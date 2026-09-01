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
  GithubOriginal,
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
      return <GithubOriginal {...iconProps} />
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

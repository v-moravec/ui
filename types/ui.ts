export type ComponentWithPropsProps = {
  componentName: string
  props: (
    | { name: string; type: 'boolean' | 'string'; value: boolean | string }
    | { name: string; type: 'option'; value: { value: any; label: string }; options: { label: string; value: any }[] }
  )[]
}

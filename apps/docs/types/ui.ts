export type ComponentWithPropsProps = {
  componentName: string
  props: (
    | { name: string; type: 'boolean' | 'string' | 'number'; value: boolean | string | number }
    | { name: string; type: 'option'; value: { value: any; label: string }; options: { label: string; value: any }[] }
  )[]
}

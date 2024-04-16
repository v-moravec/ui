<template>
  <BlockSectionSimple
    title="Simple"
    description="This is a simple section description. You can replace it using props."
  >
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
      <UiCard>
        <UiTextTitle>Card 1</UiTextTitle>
        <UiTextNormal>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.</UiTextNormal>
      </UiCard>
      <UiCard>
        <UiTextTitle>Card 2</UiTextTitle>
        <UiTextNormal>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.</UiTextNormal>
      </UiCard>
    </div>
  </BlockSectionSimple>
</template>

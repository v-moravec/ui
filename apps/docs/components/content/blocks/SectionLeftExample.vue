<template>
  <BlockSectionLeft
    title="Left section title"
    description="This is a left section description. You can replace it using props."
  >
    <div class="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <UiCard class="hover:bg-secondary hover:text-secondary-contrast">
        <UiTextTitle>Card 1</UiTextTitle>
        <UiTextNormal>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.</UiTextNormal>
      </UiCard>
      <UiCard class="hover:bg-secondary hover:text-secondary-contrast">
        <UiTextTitle>Card 2</UiTextTitle>
        <UiTextNormal>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.</UiTextNormal>
      </UiCard>
      <UiCard class="hover:bg-secondary hover:text-secondary-contrast">
        <UiTextTitle>Card 3</UiTextTitle>
        <UiTextNormal>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.</UiTextNormal>
      </UiCard>
      <UiCard class="hover:bg-secondary hover:text-secondary-contrast">
        <UiTextTitle>Card 4</UiTextTitle>
        <UiTextNormal>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.</UiTextNormal>
      </UiCard>
    </div>
  </BlockSectionLeft>
</template>

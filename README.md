# v-moravec/ui

Flexible collection of reusable components and themes. Make it yours.

## Description

v-moravec/ui is dedicated to providing you with sophisticated, user-friendly solutions designed to enhance your workflow. Our goal is to streamline the processes of development and design, making them more efficient and accessible for everyone. Whether you're building a landing page, a complex application, or anything in between, our tools are engineered to boost efficiency and enhance your creative process.

## Getting Started

To start using the v-moravec/ui library efficiently, we provide a Command Line Interface (CLI) tool. This guide outlines the steps to initialize a project and add components or blocks.

### Prerequisites

Ensure Node.js is installed on your system to use `npx`, which are necessary for executing the commands provided in this guide.

### Installation

To prepare the project with all necessary files and dependencies, run the following command in the terminal:

```bash
npx @v-moravec/ui init
```

This command adds the required files and dependencies to begin integrating components and blocks, ensuring they function as intended.

You will need to add `@nuxtjs/tailwindcss` and `nuxt-icon` to your modules in `nuxt.config.ts`. You can do that using `nuxi module add` command.

Add module to use Tailwind:

```bash
npx nuxi module add @nuxtjs/tailwindcss
```

Add module to use icons:

```bash
npx nuxi module add nuxt-icon
```

### Add Components and Blocks
That's it. Your project is now ready and you can start adding components and blocks.

Components and blocks can be found in the documentation. To add a component or block, use the commands provided in the documentation, following this format:

```bash
npx @v-moravec/ui add [...componentName/blockName]
```

Copy the appropriate command into the terminal to add the desired component or block to the project.

### Documentation
For more detailed information, please refer to our [official documentation](https://ui.vojtamoravec.cz).

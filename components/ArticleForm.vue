<template>
    <div>add an article:
      <form class="flex flex-col gap-4 border-2">
        <label>
          title
          <input class="border-2 rounded-lg" type="text" />
        </label>
        <input type="file">
        <label>
          body of text
          <input class="border-2 rounded-lg w-[500px] h-[500px] " type="text"/>
        </label>
        <button class="bg-white w-fit border-2 border-blue-500" type="submit">upload article</button>
      </form>
    </div>
</template>
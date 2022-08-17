<script lang="ts">
  import {syncWrap} from '../lib/worker';
  import {onMount} from "svelte";

  let stuffResponse;

  onMount(() => {
    console.log(syncWrap.doStuff().then(data => stuffResponse = data));
  });
</script>

{#if stuffResponse}
    {#await Promise.resolve(stuffResponse.hello.foo) then foo}
        <div id="a">{JSON.stringify(foo)}</div>
    {/await}

    {#await stuffResponse.hello.foo then foo}
        <div id="b">{JSON.stringify(foo)}</div>
    {/await}
{/if}
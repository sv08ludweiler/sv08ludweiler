<script lang="ts">
	import { PUBLIC_STRAPI_HOST } from "$env/static/public";
	import event from '$lib/assets/icons/event.svg';
	import Card, { Content } from "@smui/card";
    import Button, { Label } from "@smui/button";
	import { goto } from "$app/navigation";
    import Ripple from "@smui/ripple";

    /**
    * Title of post
    */
    export let title: string;

    /**
     * Content of post
     */
    export let previewText = '';

    /**
     * Link to post
     */
    export let href: string;

    /**
     * Header image of post.
     */
	export let headerImage:
		| {
				url: string;
				alternativeText: string;
		  }
		| undefined = undefined;

    /**
	 * Publish date of post.
	 */
	export let publishedAt = '';

    /**
     * Update date of post.
     */
    export let updatedAt = '';


    /**
     * category of post.
     */
    export let teams: Array<any> = [];


    // division -> age group -> [teams]
    let teamsCategory: Map<string, Map<string, Set<string>>> = new Map<string, Map<string, Set<string>>>();

    $: {
            for (const team of teams) {

                const divisions = team.attributes.divisions.data;

                if (!divisions) {
                    continue;
                }

                for (const division of divisions) {

                    const divisionName = division.attributes.name;  
                    
                    let divisionMap: Map<string, Set<string>> | undefined;
                    if (teamsCategory.has(divisionName)) {
                        divisionMap = teamsCategory.get(divisionName)
                    }
                    
                    const ageGroup = team?.attributes?.age_group?.data;

                    if (!ageGroup) {
                        continue
                    };
                
                    const ageGroupKey: string = ageGroup?.attributes.alternativeName || ageGroup?.attributes.name
                
                    if (divisionMap) {

                        let ageMap: Set<string> | undefined;
                        if (divisionMap.has(ageGroupKey)) {
                            ageMap = divisionMap.get(ageGroupKey);
                            ageMap?.add(team.attributes.display_name);
                        } else {
                            divisionMap.set(ageGroupKey, new Set<string>([team.attributes.display_name]))
                        }
                    } else {
                        const teamSet: Set<string> = new Set<string>([team.attributes.display_name]);
                        const ageGroupMap: Map<string, Set<string>> = new Map<string, Set<string>>();
                            ageGroupMap.set(ageGroupKey, teamSet);
                        teamsCategory.set(divisionName, ageGroupMap)
                    }
                }
            }
   }
</script>

<a class="flex flex-auto drop-shadow-sm hover:drop-shadow-xl focus:drop-shadow-xl transition-all p-[1px]" href={href} use:Ripple={{surface:true, color:'primary'}}>

        <Card class="flex-auto flex ">
            {#if headerImage}
            <div class="aspect-video">
            <img
		    class="w-full object-cover h-full"
		    src={PUBLIC_STRAPI_HOST + headerImage.url}
		    alt={headerImage.alternativeText}
            />
        </div>
    {/if}
    <Content class="flex-auto">
        <h3 class="mt-0">{title}</h3>

        {#each teamsCategory as [division, ageTeamsMap]}
        {#each ageTeamsMap as [ageGroup, teamsNames]}
        <div>{division} / {ageGroup} / 
            {#each teamsNames as teamName, index}
                <span>{teamName}</span>{#if index < (teamsNames.size -1)}<span>,&nbsp;</span>{/if}
            {/each}
        </div>
        {/each}
        {/each}
    
        <table class="border-separate border-spacing-y-2 -my-2">
            {#if publishedAt && !updatedAt}
            <tr>
                <td><img class="icon icon-event text-xs h-[0.875rem] w-[0.875rem]" alt="Veröffentlicht" src={event} /></td>
                <td class="px-2 text-sm"
                >{new Intl.DateTimeFormat('de-DE', {
                    dateStyle: 'long',
                    timeStyle: 'short'
                }).format(new Date(publishedAt))}</td
                    >
                </tr>
                {/if}
                {#if updatedAt}
                <tr>
                    <td><img class="icon icon-event h-[0.875rem] w-[0.875rem]" alt="Updated" src={event} /></td>
                    <td class="px-2 text-sm"
                    >{new Intl.DateTimeFormat('de-DE', {
                        dateStyle: 'long',
                        timeStyle: 'short'
                    }).format(new Date(updatedAt))}</td
                    >
                </tr>
                {/if}
            </table>

        
            
        {#if previewText}
		<p>{@html previewText}</p>
        {/if}

        <Button on:click={() => goto(href)}  tabindex={-1} variant="outlined">
            <Label>Weiterlesen</Label>
          </Button>

    </Content>
    
        </Card>
    </a>
    
<style>

a {
    text-decoration: none;
}

.divider {
    height: 1px;
    width: 100%;
    background: grey;
    opacity: 0.3;
}

.icon {
    height: 1.6rem;
}
</style>
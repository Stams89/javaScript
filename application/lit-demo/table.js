import { html } from 'https://unpkg.com/lit-html?module';
import { styleMap } from 'http://unpkg.com/lit-html/directives/style-map.js?module';
import { classMap } from 'http://unpkg.com/lit-html/directives/class-map.js?module';
import { repeat } from 'http://unpkg.com/lit-html/directives/repeat.js?module';


export const table = (items, onClick) => html`
<table>
    ${repeat(items, i => i.id, i => tableRow(i, onClick))}
   
</table>`

 // ${items.map(i => tableRow(i, onClick))}
 
const tableRow = (item, onClick) => html`
<tr style=${styleMap(item.style || {})}>
        <td class=${classMap(item.highlight || {})}>${item.name}</td>
        <td>
        ${item.canEdit
        ? html`<button>Edit</button><button @click=${onClick.bind(null, item.id)}>Delete</button>`
        : null
    }
        </td>
 </tr>`;
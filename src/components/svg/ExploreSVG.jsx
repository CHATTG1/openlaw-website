import React from 'react';

const ExploreSVG = () => (
  <div className="svg" dangerouslySetInnerHTML={{ __html: '<svg viewBox="0 0 397 425" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><mask id="a" fill="#fff"><path d="m27.604 0c-1.676 0-3.356 0-5.032.148l.456 5.332c1.372-.148 3.052-.148 4.424 0h.76l.156-5.48zm6.104 5.632c1.676.148 3.504.44 5.184.74l1.22-5.188c-1.984-.44-3.812-.736-5.796-.888zm-22.724-3.556 1.524 5.18c1.676-.44 3.504-.736 5.184-1.184l-1.068-5.328c-1.828.44-3.812.736-5.64 1.332zm32.94 5.628c1.676.444 3.356 1.036 5.032 1.776l2.136-5.032c-1.832-.744-3.66-1.336-5.492-1.928zm-43.924-1.484 2.596 4.888c1.672-.736 3.2-1.476 4.724-2.216l-1.98-5.04c-1.832.744-3.664 1.48-5.34 2.368zm53.688 5.484c1.52.74 3.048 1.628 4.572 2.668l3.052-4.448c-1.68-1.032-3.36-2.072-5.032-2.96zm8.84 5.924c1.376 1.04 2.748 2.224 3.968 3.412l3.812-3.708c-1.372-1.332-2.748-2.664-4.268-3.848zm7.472 7.116c1.224 1.332 2.292 2.664 3.204 4.148l4.576-2.964c-1.068-1.632-2.288-3.112-3.504-4.596zm5.948 8.736c.764 1.48 1.684 2.968 2.292 4.596l5.184-1.928c-.76-1.78-1.68-3.552-2.592-5.188zm3.968 9.336c.608 1.632 1.068 3.408 1.372 5.036l5.492-1.184c-.46-1.776-.916-3.704-1.524-5.484zm2.288 10.076c.148 1.776.304 3.404.304 5.184l5.492-.152c0-1.924-.152-3.7-.308-5.628zm-.612 15.404 5.492 1.036c.308-1.776.608-3.704.764-5.776l-5.496-.448c-.148 1.784-.452 3.56-.76 5.188zm-3.052 9.924 5.188 2.08c.764-1.78 1.372-3.56 1.832-5.484l-5.336-1.484c-.464 1.628-1.072 3.264-1.684 4.888zm-4.876 9.184 4.728 2.968c1.068-1.628 2.132-3.264 2.896-4.888l-5.032-2.52c-.764 1.48-1.68 2.96-2.592 4.44zm-6.404 8.152 3.964 3.704c1.372-1.332 2.592-2.816 3.96-4.152l-4.42-3.404c-1.064 1.336-2.284 2.668-3.504 3.852zm-8.088 6.668 3.204 4.444c1.528-1.04 3.052-2.22 4.576-3.408l-3.66-4.152c-1.22 1.04-2.744 2.076-4.12 3.116zm-9.296 5.184 2.284 4.892c1.828-.748 3.508-1.632 5.184-2.52l-2.748-4.744c-1.52.892-3.048 1.632-4.72 2.372zm-10.072 3.26 1.22 5.332c1.984-.448 3.816-1.036 5.796-1.48l-1.832-5.188c-1.672.448-3.504.888-5.184 1.336z" fill="none"/></mask><mask id="b" fill="#fff"><path d="m30.148 2.504 2.704 4.72c1.496-.888 3-1.624 4.648-2.36l-2.252-4.864c-1.648.736-3.448 1.624-5.1 2.504zm-9.448 6.484 3.6 4.128c1.348-1.18 2.7-2.208 4.052-3.24l-3.152-4.424c-1.5 1.184-3 2.356-4.5 3.536zm-7.952 8.108 4.352 3.388c1.048-1.328 2.252-2.652 3.3-3.98l-3.9-3.684c-1.348 1.328-2.552 2.8-3.752 4.276zm-6.3 9.576 4.952 2.508c.748-1.624 1.648-3.096 2.548-4.424l-4.648-2.948c-1.052 1.624-1.952 3.244-2.852 4.864zm-4.2 10.464 5.252 1.472c.6-1.62 1.048-3.244 1.648-4.716l-5.1-2.06c-.596 1.768-1.2 3.532-1.8 5.304zm-1.948 11.2 5.4.444c.152-1.768.3-3.536.748-5.012l-5.4-1.028c-.296 1.764-.6 3.68-.748 5.596zm-.3 5.6c0 1.768.148 3.684.3 5.6l5.552-.444c-.152-1.764-.304-3.388-.304-5.156zm1.2 11.2c.3 1.768.748 3.684 1.352 5.456l5.4-1.476c-.604-1.62-1.052-3.388-1.352-5.012zm3.3 10.76c.6 1.768 1.5 3.532 2.4 5.152l4.948-2.648c-.9-1.472-1.648-2.948-2.248-4.568zm5.4 10.016c1.048 1.624 2.248 3.1 3.452 4.572l4.196-3.388c-1.2-1.328-2.248-2.656-3.148-4.128zm7.348 8.7c1.352 1.328 2.7 2.648 4.204 3.828l3.6-4.124c-1.352-1.176-2.7-2.36-3.904-3.54zm71.1 3.68 3.004 4.568c1.648-1.028 3.148-2.06 4.648-3.236l-3.448-4.276c-1.352 1.032-2.7 2.064-4.204 2.944zm-62.396 3.54c1.648 1.028 3.296 2.064 4.948 2.944l2.7-4.716c-1.5-.732-3-1.768-4.5-2.648zm53.1 1.18 1.948 5.008c1.8-.732 3.6-1.472 5.4-2.208l-2.552-4.86c-1.648.732-3.148 1.472-4.796 2.06zm-42.904 4.276c1.8.732 3.6 1.324 5.4 1.912l1.652-5.156c-1.652-.444-3.3-1.032-4.952-1.768zm33.6-1.772-.748.148.9 5.304.9-.148c1.648-.44 3.3-.732 4.8-1.18l-1.5-5.156c-1.348.44-2.852.74-4.352 1.032zm-22.648 5.156c1.948.296 3.752.74 5.7.888l.6-5.308c-1.652-.292-3.452-.588-5.1-.884zm12.152-4.124h-.752v5.452h.9c1.652 0 3.3-.148 4.648-.292l-.448-5.312c-1.352.152-2.852.152-4.348.152z" fill="none"/></mask><g fill="none" fill-rule="evenodd" transform=""><path d="m12 4v309.319141h45.8668553v-265.5609188h.1484494v309.4795458h45.8628433v43.762232h236.96939.152462v-309.4675152h-46.015305v-43.7742626h-45.858831v-43.7582222z" fill="#fff"/><path d="m76 68v281h25.880325v-257.1350714h183.119675v-23.8649286z" fill="#6cbbf1"/><path d="m32 24v281h25.8597308v-257.1270429h183.1402692v-23.8729571z" fill="#b9d8ee"/><path d="m100 405h241v-317h-241zm5.378317-5.397025h230.09475v-306.061494h-230.09475z" fill="#405ea7"/><path d="m100 405h241v-317h-241zm5.378317-5.397025h230.09475v-306.061494h-230.09475z" fill="#4a555f"/><path d="m56 44v317h51.096017l-.1446-267.3915063h190.048583v-49.6084937zm5.5269333 5.3970253h230.0947497v38.6659747h-190.0526v267.391506h-40.0421497z" fill="#405ea7"/><path d="m8 0v317h51.100885l-.1486191-267.3908784h190.0477341v-49.6091216zm5.3743896 5.39709363h230.0985854v38.66646417h-190.0517513v267.3948912h-40.0468341z" fill="#405ea7"/><g fill="#4a555f"><path d="m148 168h144v-4h-144z"/><path d="m148 233h144v-4h-144z"/><path d="m148 297h144v-4h-144z"/><path d="m148 313h144v-4h-144z"/><path d="m148 329h72v-4h-72z"/><path d="m148 249h144v-4h-144z"/><path d="m148 265h144v-4h-144z"/><path d="m148 184h144v-4h-144z"/><path d="m148 200h144v-4h-144z"/><path d="m-20 136h128v-156h-128z" mask="url(#a)" transform="translate(309 48)"/><path d="m-20 132h136v-152h-136z" mask="url(#b)" transform="translate(0 313)"/></g></g></svg>'}} />
);

export default ExploreSVG;

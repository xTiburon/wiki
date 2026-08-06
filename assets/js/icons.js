/* ═══════════════════════════════════════════
   icons.js  —  Set de íconos SVG en línea
   PlanetMC Wiki
   Reemplaza los emojis por íconos consistentes,
   sin dependencias externas. Uso: Icon('shield')
   ═══════════════════════════════════════════ */

const ICONS = {
  'link':            '<path d="M9 17H7a5 5 0 0 1 0-10h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" y1="12" x2="16" y2="12"/>',
  'arrow-right':     '<line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/>',
  'lightbulb':       '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 2Z"/>',
  'alert-triangle':  '<path d="M12 3 2 20h20L12 3Z"/><line x1="12" y1="9" x2="12" y2="14"/><circle cx="12" cy="17.3" r=".4" fill="currentColor" stroke="none"/>',
  'wrench':          '<path d="M15 6.5a4 4 0 0 1-5.3 4.3L4 16.5V20h3.5l5.7-5.7A4 4 0 0 1 17.5 9l3-3-2.5-2.5-3 3Z"/>',
  'clipboard-list':  '<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="14" x2="15" y2="14"/><line x1="9" y1="18" x2="12" y2="18"/>',
  'shield':          '<path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z"/>',
  'tag':             '<path d="M3 11.5V4a1 1 0 0 1 1-1h7.5L21 11.5 12.5 20 3 11.5Z"/><circle cx="8" cy="7.5" r="1.4" fill="currentColor" stroke="none"/>',
  'gamepad':         '<rect x="2" y="7" width="20" height="11" rx="4"/><line x1="7" y1="10" x2="7" y2="14"/><line x1="5" y1="12" x2="9" y2="12"/><circle cx="16" cy="10.5" r="1" fill="currentColor" stroke="none"/><circle cx="18.5" cy="13" r="1" fill="currentColor" stroke="none"/>',
  'trophy':          '<path d="M8 4h8v5a4 4 0 0 1-8 0V4Z"/><path d="M8 5H4v2a3 3 0 0 0 4 2.8"/><path d="M16 5h4v2a3 3 0 0 1-4 2.8"/><line x1="12" y1="13" x2="12" y2="17"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="10" y1="17" x2="14" y2="17"/>',
  'rocket':          '<path d="M12 2c3 1 5 4.5 5 8 0 3-1 6-2 8l-3 2-3-2c-1-2-2-5-2-8 0-3.5 2-7 5-8Z"/><circle cx="12" cy="9" r="1.6" fill="currentColor" stroke="none"/><path d="M8.5 15 5 17l1-4"/><path d="M15.5 15 19 17l-1-4"/>',
  'message-circle':  '<path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L4 21l1.4-4.6A8.5 8.5 0 1 1 21 12Z"/>',
  'help-circle':     '<circle cx="12" cy="12" r="9"/><path d="M9.2 9.5a2.8 2.8 0 1 1 4.3 2.4c-.9.6-1.5 1.1-1.5 2.1"/><circle cx="12" cy="17.3" r=".4" fill="currentColor" stroke="none"/>',
  'pickaxe':         '<path d="M4 6c4-3 9-3 13 1"/><path d="M17 7 5 19l-2-2L15 5"/><path d="M20 18c-4 3-9 3-13-1"/><path d="M7 17l12-12 2 2L9 19"/>',
  'flag':            '<path d="M5 3v18"/><path d="M5 4h11l-2 4 2 4H5"/>',
  'coins':           '<circle cx="9" cy="9" r="6"/><path d="M14.5 8.5a6 6 0 1 1 0 8.7"/><circle cx="9" cy="9" r="6"/>',
  'crown':           '<path d="M4 8l4 4 4-6 4 6 4-4-2 10H6L4 8Z"/><line x1="6" y1="20" x2="18" y2="20"/>',
  'ticket':          '<path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z"/><line x1="10" y1="6" x2="10" y2="18" stroke-dasharray="2 2"/>',
  'coffee':          '<path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z"/><path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17"/><line x1="7" y1="3" x2="7" y2="5.5"/><line x1="10" y1="3" x2="10" y2="5.5"/>',
  'smartphone':      '<rect x="6" y="2" width="12" height="20" rx="2.5"/><line x1="10.5" y1="19" x2="13.5" y2="19"/>',
  'compass':         '<circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-6 2 2-6 6-2Z"/>',
  'star':            '<path d="M12 2.5l2.9 6 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.5 1.3-6.6-4.9-4.6 6.6-.8L12 2.5Z"/>',
  'scroll':          '<path d="M6 4h11a2 2 0 0 1 2 2v13a1.5 1.5 0 0 1-3 0V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2 2 2 0 0 0 2 2h1"/><path d="M4 6v12a1.5 1.5 0 0 0 1.5 1.5h11.7"/>',
  'swords':          '<path d="M4 4l7 7"/><path d="M4 4h4v4"/><path d="M20 4l-7 7"/><path d="M20 4h-4v4"/><path d="M6 20l5-5"/><path d="M18 20l-5-5"/>',
  'backpack':        '<path d="M7 8V6a5 5 0 0 1 10 0v2"/><path d="M6 8h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z"/><path d="M9 12h6"/><path d="M9 16h6"/>',
  'package':         '<path d="M21 8l-9-5-9 5 9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><line x1="12" y1="13" x2="12" y2="21"/>',
  'handshake':       '<path d="M2 12l4-3 3 2 4-3 3 2 2-1 4 3"/><path d="M6 11l4 4"/><path d="M18 11l-4 4-2-1-2 2"/>',
  'vote':            '<path d="M9 11l2 2 4-4"/><rect x="4" y="4" width="16" height="16" rx="2"/>',
  'home':            '<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9"/><path d="M10 20v-5h4v5"/>',
  'globe':           '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9Z"/>',
  'settings':        '<circle cx="12" cy="12" r="3"/><path d="M12 3v2.2M12 18.8V21M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M3 12h2.2M18.8 12H21M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6"/>',
  'mail':            '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 6l9 7 9-7"/>',
  'toolbox':         '<rect x="3" y="9" width="18" height="10" rx="2"/><path d="M8 9V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3"/><line x1="3" y1="13" x2="21" y2="13"/><line x1="10" y1="13" x2="10" y2="15"/><line x1="14" y1="13" x2="14" y2="15"/>',
  'trending-up':     '<polyline points="3 16 10 9 14 13 21 6"/><polyline points="15 6 21 6 21 12"/>',
  'cart':            '<circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none"/><circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none"/><path d="M2 3h2l2.6 12.6a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H6"/>',
  'bar-chart':       '<line x1="5" y1="20" x2="5" y2="11"/><line x1="12" y1="20" x2="12" y2="5"/><line x1="19" y1="20" x2="19" y2="14"/>',
  'briefcase':       '<rect x="2" y="7" width="20" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="2" y1="13" x2="22" y2="13"/>',
  'gift':            '<rect x="3" y="9" width="18" height="12" rx="1"/><line x1="12" y1="9" x2="12" y2="21"/><path d="M3 9h18v4H3z"/><path d="M12 9c-1-3-4-5-6-3-1 1 0 3 2 3h4Z"/><path d="M12 9c1-3 4-5 6-3 1 1 0 3-2 3h-4Z"/>',
  'shopping-bag':    '<path d="M6 8h12l1 12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  'gem':             '<path d="M6 4h12l3 5-9 11L3 9l3-5Z"/><path d="M3 9h18"/><path d="M9 4l3 5 3-5"/><path d="M12 9l-3 11 3-11 3 11-3-11Z"/>',
  'hammer':          '<path d="M14 6l4 4-2.5 2.5-4-4Z"/><path d="M14.5 8.5 4 19v1.5H5.5L16 10"/><path d="M17 4l3 3-1.5 1.5-3-3Z"/>',
  'swap':             '<polyline points="17 2 21 6 17 10"/><line x1="3" y1="6" x2="21" y2="6"/><polyline points="7 22 3 18 7 14"/><line x1="21" y1="18" x2="3" y2="18"/>',
  'sprout':          '<path d="M12 22v-9"/><path d="M12 13c0-4-3-6-7-6 0 4 3 6 7 6Z"/><path d="M12 10c0-3.5 2.5-5.5 6-5.5 0 3.5-2.5 5.5-6 5.5Z"/>',
  'map-pin':         '<path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="10" r="2.3"/>',
  'crosshair':       '<circle cx="12" cy="12" r="8"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>',
  'lock':            '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  'unlock':          '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 7.4-2"/>',
  'users':           '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 4.5a3.2 3.2 0 0 1 0 6.3"/><path d="M15 14c2.8.4 5 2.8 5 6"/>',
  'user':            '<circle cx="12" cy="8" r="3.5"/><path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7"/>',
  'map':             '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><line x1="9" y1="4" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="20"/>',
  'store':           '<path d="M3 8l1.5-4h15L21 8"/><path d="M4 8h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8Z"/><line x1="9" y1="20" x2="9" y2="13"/><line x1="15" y1="20" x2="15" y2="13"/>',
  'target':          '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>',
  'wheat':           '<path d="M12 22V6"/><path d="M12 8c-2-1-3-3-2-5 2 1 3 3 2 5Z"/><path d="M12 8c2-1 3-3 2-5-2 1-3 3-2 5Z"/><path d="M12 13c-2-1-3-3-2-5 2 1 3 3 2 5Z"/><path d="M12 13c2-1 3-3 2-5-2 1-3 3-2 5Z"/>',
  'footprints':      '<ellipse cx="8" cy="7" rx="2.3" ry="3"/><ellipse cx="16" cy="15" rx="2.3" ry="3"/><line x1="8" y1="11" x2="8" y2="12"/><line x1="16" y1="19" x2="16" y2="20"/>',
  'egg':             '<path d="M12 22c4.4 0 7-4 7-9 0-6-4-11-7-11S5 7 5 13c0 5 2.6 9 7 9Z"/>',
  'fish':             '<path d="M3 12c3-4 8-6 13-4 2 .8 4 2.5 5 4-1 1.5-3 3.2-5 4-5 2-10 0-13-4Z"/><circle cx="16" cy="10.5" r=".6" fill="currentColor" stroke="none"/><path d="M18 9l3-3M18 15l3 3"/>',
  'radio':           '<circle cx="12" cy="15" r="2.3"/><path d="M6 15a6 6 0 0 1 12 0"/><path d="M3 15a9 9 0 0 1 18 0"/>',
  'shuffle':         '<polyline points="17 3 21 3 21 7"/><line x1="3" y1="21" x2="21" y2="3"/><polyline points="17 21 21 21 21 17"/><line x1="3" y1="3" x2="9" y2="9"/><line x1="15" y1="15" x2="21" y2="21"/>',
  'droplet':         '<path d="M12 3c3.5 4.5 7 8.5 7 12a7 7 0 0 1-14 0c0-3.5 3.5-7.5 7-12Z"/>',
  'ban':             '<circle cx="12" cy="12" r="9"/><line x1="5.6" y1="5.6" x2="18.4" y2="18.4"/>',
  'repeat':          '<path d="M4 7h13l-3-3"/><path d="M4 7l3 3"/><path d="M20 17H7l3 3"/><path d="M20 17l-3-3"/>',
  'megaphone':       '<path d="M3 10v4a1 1 0 0 0 1 1h2l7 4V5L6 9H4a1 1 0 0 0-1 1Z"/><path d="M17 8a5 5 0 0 1 0 8"/>',
  'key':             '<circle cx="7" cy="15" r="4"/><path d="M10 12l10-10"/><path d="M16 6l3 3"/><path d="M13 9l3 3"/>',
  'headphones':      '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="2" y="14" width="4" height="6" rx="1.5"/><rect x="18" y="14" width="4" height="6" rx="1.5"/>',
  'scale':           '<line x1="12" y1="3" x2="12" y2="20"/><line x1="5" y1="7" x2="19" y2="7"/><path d="M5 7l-3 6a3 3 0 0 0 6 0L5 7Z"/><path d="M19 7l-3 6a3 3 0 0 0 6 0l-3-6Z"/><line x1="8" y1="21" x2="16" y2="21"/>',
  'party-popper':    '<path d="M4 20l6-13"/><path d="M9 3l1 2M13 4l-1 2M5 8l2 1"/><circle cx="16" cy="8" r=".6" fill="currentColor" stroke="none"/><circle cx="19" cy="13" r=".6" fill="currentColor" stroke="none"/><circle cx="14" cy="4" r=".6" fill="currentColor" stroke="none"/><path d="M10 20l10-6-3.5-6C14 6 9 8 8 11Z"/>',
  'search':          '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
  'keyboard':        '<rect x="2" y="6" width="20" height="12" rx="2"/><line x1="6" y1="10" x2="6" y2="10"/><line x1="10" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="14" y2="10"/><line x1="18" y1="10" x2="18" y2="10"/><line x1="6" y1="14" x2="18" y2="14"/>',
  'info':            '<circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16"/><circle cx="12" cy="7.5" r=".4" fill="currentColor" stroke="none"/>',
  'hourglass':       '<path d="M6 2h12"/><path d="M6 22h12"/><path d="M6 2c0 5 4 6 6 8-2 2-6 3-6 8"/><path d="M18 2c0 5-4 6-6 8 2 2 6 3 6 8"/>',
  'timer':           '<circle cx="12" cy="14" r="7"/><line x1="12" y1="14" x2="12" y2="10"/><line x1="10" y1="2" x2="14" y2="2"/><line x1="12" y1="2" x2="12" y2="5"/>',
  'life-buoy':       '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><line x1="5.3" y1="5.3" x2="9.4" y2="9.4"/><line x1="14.6" y1="14.6" x2="18.7" y2="18.7"/><line x1="18.7" y1="5.3" x2="14.6" y2="9.4"/><line x1="9.4" y1="14.6" x2="5.3" y2="18.7"/>',
  'check':           '<polyline points="20 6 9 17 4 12"/>',
  'x':               '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  'chevron-right':   '<polyline points="9 18 15 12 9 6"/>',
  'file-search':     '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"/><path d="M14 3l5 5"/><path d="M14 3v5h5"/><circle cx="12" cy="15" r="2.5"/><line x1="14" y1="17" x2="16" y2="19"/>',
};

function Icon(name, size) {
  const body = ICONS[name] || ICONS['help-circle'];
  const s = size || '1em';
  return '<svg class="icon icon-' + name + '" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" ' +
    'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ' +
    'aria-hidden="true" focusable="false">' + body + '</svg>';
}

function Dot(color) {
  const colors = { red: '#ff5c6a', orange: '#e8823a', purple: '#8b6bf2', blue: '#5ce1ff', white: '#f5f6fb' };
  return '<span class="dot" style="background:' + (colors[color] || colors.white) + '"></span>';
}

window.Icon = Icon;
window.Dot = Dot;

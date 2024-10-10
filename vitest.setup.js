import { vi } from 'vitest';
import 'vitest-dom/extend-expect';

// scrollIntoView is not implemented in jsdom
window.HTMLElement.prototype.scrollIntoView = vi.fn();
window.scrollTo = vi.fn();

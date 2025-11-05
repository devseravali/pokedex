import '@testing-library/jest-dom';
import { TextEncoder } from 'util';
if (typeof global.TextEncoder === 'undefined') {
    global.TextEncoder = TextEncoder;
}

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  keys,
  match,
  matches,
  isPrintableCharacter,
  isActivation,
  isNavigation,
  getNextIndex,
  handleArrowNavigation,
} from '../keyboard';
import { resetWarningCache, warning, deprecateProp } from '../warn';
import { generateId, resetIdCounter } from '../id';
import { isValidElementType } from '../polymorphic';

describe('Keyboard Utilities', () => {
  describe('keys', () => {
    it('should have all expected key codes', () => {
      expect(keys.Enter).toBe('Enter');
      expect(keys.Space).toBe(' ');
      expect(keys.Tab).toBe('Tab');
      expect(keys.Escape).toBe('Escape');
      expect(keys.ArrowUp).toBe('ArrowUp');
      expect(keys.ArrowDown).toBe('ArrowDown');
      expect(keys.ArrowLeft).toBe('ArrowLeft');
      expect(keys.ArrowRight).toBe('ArrowRight');
      expect(keys.Home).toBe('Home');
      expect(keys.End).toBe('End');
    });
  });

  describe('match', () => {
    it('should match single key event', () => {
      const event = { key: 'Enter' } as KeyboardEvent;
      expect(match(event, keys.Enter)).toBe(true);
      expect(match(event, keys.Escape)).toBe(false);
    });
  });

  describe('matches', () => {
    it('should match array of keys', () => {
      const event = { key: 'Enter' } as KeyboardEvent;
      expect(matches(event, [keys.Enter, keys.Space])).toBe(true);
      expect(matches(event, [keys.Tab, keys.Escape])).toBe(false);
    });

    it('should return true for matching key', () => {
      const event = { key: 'ArrowUp' } as KeyboardEvent;
      expect(matches(event, [keys.ArrowUp])).toBe(true);
    });
  });

  describe('isPrintableCharacter', () => {
    it('should identify printable characters', () => {
      expect(isPrintableCharacter({ key: 'a', ctrlKey: false, metaKey: false } as KeyboardEvent)).toBe(true);
      expect(isPrintableCharacter({ key: 'Z', ctrlKey: false, metaKey: false } as KeyboardEvent)).toBe(true);
      expect(isPrintableCharacter({ key: '1', ctrlKey: false, metaKey: false } as KeyboardEvent)).toBe(true);
      expect(isPrintableCharacter({ key: ' ', ctrlKey: false, metaKey: false } as KeyboardEvent)).toBe(true);
      expect(isPrintableCharacter({ key: 'Enter', ctrlKey: false, metaKey: false } as KeyboardEvent)).toBe(false);
      expect(isPrintableCharacter({ key: 'Escape', ctrlKey: false, metaKey: false } as KeyboardEvent)).toBe(false);
    });
  });

  describe('isActivation', () => {
    it('should identify activation keys', () => {
      expect(isActivation({ key: 'Enter' } as KeyboardEvent)).toBe(true);
      expect(isActivation({ key: ' ' } as KeyboardEvent)).toBe(true);
      expect(isActivation({ key: 'Tab' } as KeyboardEvent)).toBe(false);
    });
  });

  describe('isNavigation', () => {
    it('should identify navigation keys', () => {
      expect(isNavigation({ key: 'ArrowUp' } as KeyboardEvent)).toBe(true);
      expect(isNavigation({ key: 'ArrowDown' } as KeyboardEvent)).toBe(true);
      expect(isNavigation({ key: 'Home' } as KeyboardEvent)).toBe(true);
      expect(isNavigation({ key: 'End' } as KeyboardEvent)).toBe(true);
      expect(isNavigation({ key: 'Enter' } as KeyboardEvent)).toBe(false);
    });
  });

  describe('getNextIndex', () => {
    it('should get next index with wrap around', () => {
      expect(getNextIndex(0, 5, 'down', true)).toBe(1);
      expect(getNextIndex(4, 5, 'down', true)).toBe(0); // wrap around
    });

    it('should get next index without wrap around', () => {
      expect(getNextIndex(0, 5, 'down', false)).toBe(1);
      expect(getNextIndex(4, 5, 'down', false)).toBe(4); // stay at end
    });

    it('should handle backward navigation', () => {
      expect(getNextIndex(2, 5, 'up', true)).toBe(1);
      expect(getNextIndex(0, 5, 'up', true)).toBe(4); // wrap around backward
    });
  });

  describe('handleArrowNavigation', () => {
    it('should handle arrow down navigation', () => {
      const event = {
        key: 'ArrowDown',
      } as unknown as KeyboardEvent;

      const result = handleArrowNavigation(event, 0, 5, { vertical: true });

      expect(result).toBe(1);
    });

    it('should handle arrow up navigation', () => {
      const event = {
        key: 'ArrowUp',
      } as unknown as KeyboardEvent;

      const result = handleArrowNavigation(event, 2, 5, { vertical: true });

      expect(result).toBe(1);
    });

    it('should return null for unmatched keys', () => {
      const event = {
        key: 'Enter',
      } as unknown as KeyboardEvent;

      const result = handleArrowNavigation(event, 0, 5);

      expect(result).toBeNull();
    });
  });
});

describe('Warning Utilities', () => {
  beforeEach(() => {
    resetWarningCache();
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('warning', () => {
    it('should log warning in non-production mode', () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';

      warning('Test warning message');
      expect(console.warn).toHaveBeenCalledWith('[Biz UI] Test warning message');

      process.env.NODE_ENV = originalEnv;
    });

    it('should not repeat the same warning', () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';

      warning('Repeated warning');
      warning('Repeated warning');

      expect(console.warn).toHaveBeenCalledTimes(1);

      process.env.NODE_ENV = originalEnv;
    });
  });

  describe('deprecateProp', () => {
    it('should log deprecation warning for prop', () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';

      deprecateProp('oldProp', 'newProp', 'Component');
      expect(console.warn).toHaveBeenCalledWith(
        '[Biz UI] Component: The `oldProp` prop is deprecated. Use `newProp` instead.'
      );

      process.env.NODE_ENV = originalEnv;
    });
  });
});

describe('ID Utilities', () => {
  beforeEach(() => {
    resetIdCounter();
  });

  describe('generateId', () => {
    it('should generate unique IDs', () => {
      const id1 = generateId();
      const id2 = generateId();
      expect(id1).not.toBe(id2);
    });

    it('should use custom prefix', () => {
      const id = generateId('custom');
      expect(id.startsWith('custom-')).toBe(true);
    });

    it('should generate sequential IDs', () => {
      const id1 = generateId();
      const id2 = generateId();
      const num1 = parseInt(id1.split('-')[1], 10);
      const num2 = parseInt(id2.split('-')[1], 10);
      expect(num2).toBe(num1 + 1);
    });
  });
});

describe('Polymorphic Utilities', () => {
  describe('isValidElementType', () => {
    it('should return true for valid element types', () => {
      expect(isValidElementType('div')).toBe(true);
      expect(isValidElementType('span')).toBe(true);
      expect(isValidElementType(function Component() {})).toBe(true);
    });

    it('should return false for invalid element types', () => {
      expect(isValidElementType(null)).toBe(false);
      expect(isValidElementType(undefined)).toBe(false);
      expect(isValidElementType(123)).toBe(false);
    });
  });
});

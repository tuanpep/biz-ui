import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import {
  useControllableState,
  useMergedRefs,
  useCallbackRef,
  usePrevious,
  useForceUpdate,
  useMatchMedia,
} from '../index';

describe('useControllableState', () => {
  it('should use defaultValue when uncontrolled', () => {
    const { result } = renderHook(() =>
      useControllableState({ defaultValue: 'initial' })
    );
    expect(result.current[0]).toBe('initial');
  });

  it('should use value when controlled', () => {
    const { result } = renderHook(() =>
      useControllableState({ value: 'controlled', defaultValue: 'initial' })
    );
    expect(result.current[0]).toBe('controlled');
  });

  it('should update state when setValue is called', () => {
    const { result } = renderHook(() =>
      useControllableState({ defaultValue: 'initial' })
    );

    act(() => {
      result.current[1]('updated');
    });

    expect(result.current[0]).toBe('updated');
  });

  it('should call onChange when state changes', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() =>
      useControllableState({ defaultValue: 'initial', onChange })
    );

    act(() => {
      result.current[1]('updated');
    });

    expect(onChange).toHaveBeenCalledWith('updated');
  });

  it('should support functional updates', () => {
    const { result } = renderHook(() =>
      useControllableState({ defaultValue: 0 })
    );

    act(() => {
      result.current[1]((prev) => prev + 1);
    });

    expect(result.current[0]).toBe(1);
  });
});

describe('useMergedRefs', () => {
  it('should merge multiple refs', () => {
    const ref1 = { current: null };
    const ref2 = { current: null };
    const { result } = renderHook(() => useMergedRefs([ref1, ref2]));

    const element = document.createElement('div');
    act(() => {
      result.current(element);
    });

    expect(ref1.current).toBe(element);
    expect(ref2.current).toBe(element);
  });

  it('should handle function refs', () => {
    const fnRef = vi.fn();
    const { result } = renderHook(() => useMergedRefs([fnRef]));

    const element = document.createElement('div');
    act(() => {
      result.current(element);
    });

    expect(fnRef).toHaveBeenCalledWith(element);
  });

  it('should handle null refs', () => {
    const ref = { current: null };
    const { result } = renderHook(() => useMergedRefs([ref, null]));

    const element = document.createElement('div');
    act(() => {
      result.current(element);
    });

    expect(ref.current).toBe(element);
  });
});

describe('useCallbackRef', () => {
  it('should return a stable ref with current value', () => {
    const callback = vi.fn();
    const { result, rerender } = renderHook(({ cb }) => useCallbackRef(cb), {
      initialProps: { cb: callback },
    });

    const firstRef = result.current;
    expect(firstRef.current).toBe(callback);

    const newCallback = vi.fn();
    rerender({ cb: newCallback });

    // Ref should be stable
    expect(result.current).toBe(firstRef);
    // But current should be updated
    expect(result.current.current).toBe(newCallback);
  });
});

describe('usePrevious', () => {
  it('should return undefined on first render', () => {
    const { result } = renderHook(() => usePrevious('first'));
    expect(result.current).toBeUndefined();
  });

  it('should return previous value after update', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 'first' },
    });

    expect(result.current).toBeUndefined();

    rerender({ value: 'second' });
    expect(result.current).toBe('first');

    rerender({ value: 'third' });
    expect(result.current).toBe('second');
  });
});

describe('useForceUpdate', () => {
  it('should force a re-render when called', () => {
    let renderCount = 0;
    const { result } = renderHook(() => {
      renderCount++;
      return useForceUpdate();
    });

    expect(renderCount).toBe(1);

    act(() => {
      result.current();
    });

    expect(renderCount).toBe(2);
  });
});

describe('useMatchMedia', () => {
  it('should return matches from media query', () => {
    // Default mock returns false
    const { result } = renderHook(() => useMatchMedia('(min-width: 768px)'));
    expect(result.current).toBe(false);
  });
});

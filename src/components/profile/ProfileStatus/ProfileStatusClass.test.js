import React from "react";
import {create} from "react-test-renderer";
import ProfileStatusClass from "./ProfileStatusClass";

describe("ProfileStatusClass component", () => {

    test("after creating component should be span shown", () => {
        const component = create(<ProfileStatusClass status="test-status"/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("span should be shown with correct status", () => {
        const component = create(<ProfileStatusClass status="test-status"/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("test-status");
    });

    test("span should be changed to input with same value in editMode", () => {
        const component = create(<ProfileStatusClass status="test-status"/>);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("test-status");
    });

    test("callback should be called after leaving editMode", () => {
        const mockCallback= jest.fn();
        const component = create(<ProfileStatusClass status="test-status" updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
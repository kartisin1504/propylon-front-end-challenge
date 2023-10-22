import React, { useCallback, useEffect, useState } from "react";
import "./style.css";
import useContents from "../../hooks/useContents";
import ExpandlessfilledLevel1 from "../../icons/ExpandlessfilledLevel1/ExpandlessfilledLevel1";
import ExpandlessfilledLevel2 from "../../icons/ExpandlessfilledLevel2/ExpandlessfilledLevel2";
import TocItem from "../../components/TocItem/TocItem";

interface TocNode {
    id: string;
    name: string;
    level: number;
    parent_id: string;
    content: string;
}

const Frame: React.FC = () => {

    const [selectedParent, setSelectedParent] = useState<string>('');
    const [selectId, setSelectId] = useState<string>('');

    const handleClick = useCallback((Id: string) => {
        setSelectId(Id);
    }, []);

    const updateChapter = (parentId: string, Id: string) => {
        setSelectedParent(parentId);
        setSelectId(Id);
    }

    const { results } = useContents();

    // Filter out duplicate items by id
    const filteredResults: TocNode[] = results.filter((item, index, self) =>
        index === self.findIndex((t) => t.id === item.id)
    );

    useEffect(() => {
        if (results.length > 0) {
            setSelectId(results[0].id);
        }
    }, [results]);

    return (
        <div data-testid="frame" className="frame">
            <div className="frame-wrapper">
                <div className="div">
                    {filteredResults.map((node, index) => {
                        const IconComponent = node.level === 1 ? <ExpandlessfilledLevel1 className="expandlessfilled-101" color="black" opacity="0.6" /> : <ExpandlessfilledLevel2 className="expandlessfilled-102" />;
                        return (
                            <TocItem
                                key={index}
                                item={node}
                                chkdOutContent={false}
                                className="TOC-item-instance"
                                iconSizesIcon={IconComponent}
                                level={node.level === 1 ? 'one' : node.level === 2 ? 'two' : 'three'}
                                lineClassName="design-component-instance-node"
                                state={node.id === selectId ? 'selected' : 'default'}
                                text={node.name}
                                toggleState={node.parent_id !== '' ? 'closed' : 'open'}
                                type="heading"
                                onSelectChapter={updateChapter}
                                chevronClassName=""
                                containerClassName=""

                            />
                        );
                    })}
                </div>
            </div>
            <div data-testid="div-2" className="div-2">
                {filteredResults.filter((item) => item.parent_id === selectedParent).map((content) => {
                    return (
                        <div onClick={() => handleClick(content.id)} key={content.id}>
                            <div className="typography">
                                <div className="typography-2">{content.name}</div>
                            </div>
                            <div className="typography-wrapper">
                                <p className="p">
                                    {content.content}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Frame;

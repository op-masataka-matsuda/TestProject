import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'システム設計',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        システムの全体像、アーキテクチャ、主要コンポーネントの関係性などを詳細に説明しています。
        設計の背景や目的も含めて理解できます。
      </>
    ),
  },
  {
    title: '機能要件',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        システムが提供する機能の詳細な仕様を記載しています。
        ユースケース、画面遷移、APIなどの情報が含まれています。
      </>
    ),
  },
  {
    title: '技術仕様',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        採用する技術スタック、データベース設計、セキュリティ対策、
        パフォーマンス要件などの技術的な詳細を説明しています。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

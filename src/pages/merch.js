import React, { useState } from 'react';
import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker } from '@shopify/app-bridge-react';
import { Card } from '@shopify/polaris';
import store from 'store-js';
import Link from 'next/link';
// import Merchants from '../Merchants'

function Merch() {

    const [modal, setModal] = useState({ open: false });
    const emptyState = !store.get('ids');

    console.log('emptyState = ', emptyState);

    function handleSelection(resources) {
        const idsFromResources = resources.selection.map((product) => product.id);
        setModal({ open: false });
        store.set('ids', idsFromResources);
        console.log('this is product ids', store.get('ids'));
    }

    return (
        <Page
            title="Merchant Dashboard"
            description="merch dashboard"
        //fullWidth="true"
        >
            <Layout>
                <Layout.Section
                >
                    <Card title="Manage Users" sectioned>
                        <ul>

                            <li>
                                <Link href="user/[id]" as={`user/0`}><a>User 0</a></Link>
                            </li>

                        </ul>
                    </Card>
                </Layout.Section>
                <Layout.Section>
                    <Card sectioned>
                        <p>Primary 2</p>
                    </Card>
                </Layout.Section>
                <Layout.Section secondary>
                    <Card sectioned>
                        <p>Secondary 2</p>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>

    )
}



export default Merch;
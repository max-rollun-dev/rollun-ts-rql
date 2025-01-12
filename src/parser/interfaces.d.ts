import TokenStream from './TokenStream';
import Token from './Token';
import AbstractNode from '../nodes/AbstractNode';

export interface SubLexerInterface {
	getTokenAt(code: string, cursor: number): Token | null
}

export interface SubParserInterface {
	parse(tokenStream: TokenStream): any
}

export interface TypeCasterInterface {
	typeCast(token: Token): any
}

export interface NodeParserInterface extends SubParserInterface {
	parse(tokenStream: TokenStream): AbstractNode;

	supports(tokenStream: TokenStream): boolean
}
